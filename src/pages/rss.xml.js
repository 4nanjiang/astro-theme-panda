import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import { PandaConfig } from '../config.js'
const { site, description, title } = PandaConfig
const getTitle = () => typeof title === 'object' ? title.zh : title

// 获取当前语言的描述
const getDescription = () => {
    return typeof description === 'object' ? description.zh : description
}

export const prerender = true

const parser = new MarkdownIt()

export async function GET({ params }) {
    const blog = await getCollection('posts')
    const posts = blog
        .filter((i) => {
            return i.data.title && !i.data.draft && !i.id.includes('.en.md')
        })
        .map((post) => {
            const html = parser.render(post.body)
            return {
                ...post.data,
                link: `/posts/${post.slug}/`,
                content: html
            }
        })
    return new Response(
        (
            await rss({
                site,
                title: `${getTitle()} - 中文`,
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
