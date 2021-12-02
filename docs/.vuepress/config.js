const navbar = require('./_navbar')
const sidebar = require('./_sidebar')

module.exports = {
  lang: 'zh-CN',
  title: '知识森林',
  description: '',
  head: [
    [
      'script',
      {},
      'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?c19af39a223d69e47018ede1cbe9afc9";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();'
    ]
  ],
  dest: 'dist',
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    navbar,
    sidebar,
    sidebarDepth: 1
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search'
          }
        }
      }
    ]
  ]
}
