export const PandaConfig = {
    title: {
        zh: '南江 Blog',
        en: 'NanJiang Blog'
    },
    description: {
        zh: '不加引证的言谈，不经推敲的思考。',
        en: 'Words without citation, thoughts without refinement.'
    },
    start: '2024',
    site: 'https://www.nanjiang.online/',
    defaultLocale: 'zh',
    navbar: [
        {
            title: { zh: '路线图', en: 'roadmap' },
            url: '/projects/'
        },
        {
            title: { zh: '当下', en: 'now' },
            url: '/now/'
        },
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
