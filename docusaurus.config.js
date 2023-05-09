const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const HOST = 'https://knowledge.yukapril.com'

const config = {
  title: '知识森林',
  tagline: '知识森林',
  favicon: 'img/favicon.ico',
  url: HOST,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          routeBasePath: '/blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: '知识森林',
      logo: {
        alt: '知识森林',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'dropdown',
          label: '前端基础',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              label: 'Javascript',
              sidebarId: 'javascript'
            }
          ]
        },
        {
          type: 'dropdown',
          label: '综合应用',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              label: '输入框及键盘处理',
              sidebarId: 'practiceInput'
            }
          ]
        },
        {
          type: 'dropdown',
          label: '项目部署',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              label: 'Surge部署教程',
              sidebarId: 'publishTutorialSurge'
            }
          ]
        },
        {
          type: 'docSidebar',
          label: 'NPM 探索',
          sidebarId: 'npm'
        },

        // { to: '/blog', label: 'Blog', position: 'left' },

        {
          type: 'dropdown',
          label: '链接',
          position: 'right',
          items: [
            {
              label: '博客',
              href: 'https://www.yukapril.com'
            }
          ]
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'sitemap',
              href: HOST + '/sitemap.xml'
            }
          ]
        }
      ],
      copyright: `Copyright © ${ new Date().getFullYear() } yukaPriL. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/',
        blogRouteBasePath: '/blog'

      }
    ]
  ]
}

module.exports = config
