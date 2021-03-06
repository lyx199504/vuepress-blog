module.exports = {
    title: '夜光的博客',
    description: '',

    head: [
        ['link', { rel: 'icon', href: '/avatar.jpg' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        // markdown数学公式需要引入
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
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

        sidebar: {
            '/views/课程笔记/': [
                {
                    title: '信息隐藏',
                    collapsable: true,
                    children: [
                        '信息隐藏/第1讲：什么是信息隐藏？',
                        '信息隐藏/第2讲：为什么能信息隐藏？',
                        '信息隐藏/第3讲：什么样的隐写术是好的？',
                    ]
                },
                {
                    title: '随机过程',
                    collapsable: true,
                    children: [
                        '随机过程/第1章：概率论引论',
                        '随机过程/第2章：随机变量（上）',
                        '随机过程/第2章：随机变量（下）',
                    ]
                },
                {
                    title: '现代密码学',
                    collapsable: true,
                    children: [
                        '现代密码学/第1章：密码学基础',
                    ]
                },
                {
                    title: '信息安全数学',
                    collapsable: true,
                    children: [
                        '信息安全数学/第1章：整除',
                        '信息安全数学/第2章：同余',
                        '信息安全数学/第3章：同余式',
                    ]
                },
            ]
        },

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
        lastUpdated: '上次更新时间',
        // 项目开始时间
        startYear: '2020',

        // 评论功能
        valineConfig: {
            appId: 'iHU7d8EHJ3f9k3DqoC7Ch0t4-gzGzoHsz',// your appId
            appKey: 'ovDmM7AHcBYCERsAVQeFCDpi', // your appKey
            placeholder: '不说点什么吗？',
            avatar: 'wavatar',
        },
    },

    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.set({ html: true })
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-katex'))
        }
    },

    plugins: [
        ['meting', {
            // metingApi: "https://meting.sigure.xyz/api/music",
            meting: {
                // 网易
                server: "netease",
                // 读取歌单
                type: "playlist",
                mid: "2432919915",
            },
            // 不配置该项的话不会出现全局播放器
            aplayer: {
                // 吸底模式
                fixed: true,
                mini: true,
                // 自动播放
                autoplay: true,
                // 歌曲栏折叠
                listFolded: true,
                // 颜色
                theme: '#f9bcdd',
                // 播放顺序为随机
                order: 'random',
                // 初始音量
                volume: 0.5,
                // 关闭歌词显示
                lrcType: 3
            },
            mobile: {
                // 手机端去掉cover图
                cover: false,
            }
        }]
    ],
}  