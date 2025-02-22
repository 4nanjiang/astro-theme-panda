import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import { PandaConfig } from '../../config.js'
const { site, description, title } = PandaConfig
const getTitle = () => typeof title === 'object' ? title.en : title

// 获取英文描述
const getDescription = () => {
    return typeof description === 'object' ? description.en : description
}

export const prerender = true

const parser = new MarkdownIt()

export async function GET({ params }) {
    const blog = await getCollection('posts')
    const posts = blog
        .filter((i) => {
            return i.data.title && !i.data.draft && i.id.includes('.en.md')
        })
        .map((post) => {
            const html = parser.render(post.body)
            return {
                ...post.data,
                link: `/en/posts/${post.slug}/`,
                content: html
            }
        })
    return new Response(
        (
            await rss({
                site,
                title: `${getTitle()} - English`,
                description: getDescription(),
                items: posts
            })
        ).body,
        {
            headers: {
                'content-type': 'application/xml'
            }
        }
    )
}