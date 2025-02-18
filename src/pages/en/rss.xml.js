import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import { PandaConfig } from '../../config.js'
const { site, description, title } = PandaConfig

export const prerender = true

const parser = new MarkdownIt()

export async function GET({ params }) {
    const blog = await getCollection('posts')
    const posts = blog
        .filter((i) => {
            // 过滤出非草稿且是英文版本的文章
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
                title: `${title} - English`,
                description,
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