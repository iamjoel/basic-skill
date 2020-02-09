module.exports = {
  title: '成为专业人士的基础能力',
  description: '成为专业人士的基础能力',
  base: '/basic-skill/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      // {text: 'GitHub', link: 'https://github.com/iamjoel'},
      // {text: '简书', link: 'https://www.jianshu.com/u/EhUmA3'}
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [{
      title: '介绍',
      path: '/',
    },{
      title: '能力',
      collapsable: false,
      children: [
        {
          title: '写作',
          path: '/skill/write',
          children: [
            {
              title: '写作框架',
              path: '/skill/write/content/method'
            },
            {
              title: '选题',
              path: '/skill/write/content/choose-title'
            },
          ]
        }
      ]
    },]

  }
}