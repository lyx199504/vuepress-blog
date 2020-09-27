module.exports = {
    title: '夜光的博客',
    description: '',

    head: [
        ['link', { rel: 'icon', href: '/avatar.jpg' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],

    theme: 'reco',
    themeConfig: {
        // 作者
        author: '夜光',
        logo: '/avatar.jpg',
        authorAvatar: '/avatar.jpg',

        // 导航栏
        nav: [
            { text: '主页', link: '/', icon: 'reco-home' },
            { text: '时间线', link: '/timeline/', icon: 'reco-date' },
            { text: '关于我', link: '/about/', icon: 'reco-account' },
            { text: 'GitHub', link: 'https://github.com/lyx199504', icon: 'reco-github' }
        ],
        // 自动形成侧边导航
        sidebarDepth: 1,
        displayAllHeaders: false,

        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,

        // 友链
        friendLink: [
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: '1156743527@qq.com',
                link: 'https://www.recoluan.com'
            },
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],

        type: 'blog',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类'     // 默认文案 “分类”
            },
            tag: {
                location: 2,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },

        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 项目开始时间
        startYear: '2020',
    },

    markdown: {
        lineNumbers: true
    },
}  