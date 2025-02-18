export const PandaConfig = {
    title: '南江 Blog',
    description: '不加引述的言谈，不经推敲的思考',
    start: '2024',
    site: 'https://www.nanjiang.online/',
    defaultLocale: 'zh',
    navbar: [
        {
            title: { zh: '关于我', en: 'about' },
            url: '/about/'
        }
    ],
    footer: [
        { 
            title: 'rss',
            // 修改为直接使用字符串而不是对象
            url: '/rss.xml'
        },
        // { title: 'contact', url: 'https://github.com/yuhangch/astro-theme-panda/issues/new' },
        // { title: 'github', url: 'https://github.com/yuhangch/astro-theme-panda' }
    ]
}
