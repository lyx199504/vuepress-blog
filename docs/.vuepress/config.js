module.exports = {
    theme: 'reco',
    themeConfig: {
        author: '夜光',

        nav: [
            { text: '主页', link: '/', icon: 'reco-home' },
            { text: '时间线', link: '/timeline/', icon: 'reco-date' },
            { text: '关于我', link: '/about/', icon: 'reco-account' },
            { text: 'GitHub', link: 'https://github.com/lyx199504', icon: 'reco-github' }
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
    }
}  