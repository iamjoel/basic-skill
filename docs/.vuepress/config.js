module.exports = {
  title: '成为专业人士的基础能力',
  description: '成为专业人士的基础能力',
  base: '/basic-skill/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      {text: 'GitHub', link: 'https://github.com/iamjoel/basic-skill'},
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [{
      title: '介绍',
      path: '/',
    }]

  }
}