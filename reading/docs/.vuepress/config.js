module.exports = {
  title: '阅读',
  description: '阅读',
  base: '/basic-skill/reading/dist/', // 部署站点的基础路径
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
        title: '内容',
        collapsable: false,
        children: [
          {
            title: '选书的原则',
            path: '/content/how-to-choose'
          },
          {
            title: '快速阅读',
            path: '/content/fast-read'
          },
          {
            title: '如何写读书笔记',
            path: '/content/reading-note'
          },
        ]
      },
      {
        title: '读书笔记',
        children: [
          {
            title: '《快速阅读》 读书笔记',
            path: '/post-reading-feeling/visual-reading'
          },
          {
            title: '《快速阅读术》 读书笔记',
            path: '/post-reading-feeling/fast-reading-method'
          },
        ]
      }
    ]
  }
}