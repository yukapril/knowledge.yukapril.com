const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
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
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar,
    sidebar,
    sidebarDepth: 2
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search'
        }
      }
    })
  ]
}
