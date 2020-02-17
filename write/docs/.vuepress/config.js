module.exports = {
  title: '写作',
  description: '写作',
  base: '/basic-skill/write/dist/', // 部署站点的基础路径
  dest: './dist', // 构建输出的位置，从项目根路径开始算。
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      {text: 'GitHub', link: 'https://github.com/iamjoel/basic-skill'}
    ],
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F
    sidebar: [
      {
        title: '介绍',
        path: '/'
      },
      {
        title: '行文逻辑',
        path: '/content/logic/'
      },
      {
        title: '叙事方法',
        children: [
          {
            title: '叙事方法',
            path: '/content/method/rule'
          },
        ]
      },

      {
        title: '写作套路',
        children: [
          {
            title: '遵循用户思维写作',
            path: '/content/kata/2-user'
          },
          {
            title: '寻找选题的技巧',
            path: '/content/kata/choose-content'
          },
          {
            title: '写好标题的技巧',
            path: '/content/kata/choose-title/'
          },
          {
            title: '写好开头的技巧',
            path: '/content/kata/begin'
          },
          {
            title: '写好结尾的技巧',
            path: '/content/kata/end'
          },
          {
            title: '做加法：提高信息总量',
            path: '/content/kata/add-more'
          },
          {
            title: '做减法：提高信息密度',
            path: '/content/kata/simplify'
          },
          {
            title: '少用形容词 多用名词、动词',
            path: '/content/kata/use-word-tip'
          },
          {
            title: '其他优化文章的技巧',
            path: '/content/kata/optimize'
          },
        ]
      },
      {
        title: '积累写作素材',
        path: '/content/source-material/'
      },
    ]
  }
}