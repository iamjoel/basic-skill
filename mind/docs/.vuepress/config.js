module.exports = {
  title: '心智',
  description: '心智',
  base: '/basic-skill/mind/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      {text: 'GitHub', link: 'https://github.com/iamjoel/basic-skill'},
      {text: '基础技能首页', link: 'https://iamjoel.github.io/basic-skill/dist/'},
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [
      {
        title: '介绍',
        path: '/'
      },
      {
        title: '了解自己',
        children: [
          {
            title: '关于',
            path: '/understand-yourself/'
          },
          {
            title: '普鲁斯特问卷',
            path: '/understand-yourself/proust-questionnaire'
          }
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          {
            title: '定律',
            path: '/laws'
          }
        ]
      },
      {
        title: '读书笔记',
        children: [
          {
            title: '《幸福的方法》 读书笔记',
            path: '/post-reading-feeling/happier'
          },
        ]
      }
    ]
  }
}