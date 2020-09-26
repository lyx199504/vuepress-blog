module.exports = {
    title: '夜光的博客',
    description: '',

    head: [
        ['link', { rel: 'icon', href: '/avatar.jpg' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],

    theme: 'reco',
    themeConfig: {
        author: '夜光',
        logo: '/avatar.jpg',
        authorAvatar: '/avatar.jpg',

        nav: [
            { text: '主页', link: '/', icon: 'reco-home' },
            { text: '时间线', link: '/timeline/', icon: 'reco-date' },
            { text: '关于我', link: '/about/', icon: 'reco-account' },
            { text: 'GitHub', link: 'https://github.com/lyx199504', icon: 'reco-github' }
        ],
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
        }
    },

    startYear: '2020',
}  