const {themes} = require('prism-react-renderer')
const lightTheme = themes.github
const darkTheme = themes.dracula
const math = require('remark-math')
const katex = require('rehype-katex')
const navbar = require('./docusaurus.config.navbars')

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
    locales: ['zh-Hans'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./docusaurus.config.sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          routeBasePath: '/blog',
          path: 'blog',
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          blogSidebarCount: 20,
          blogSidebarTitle: '最新文章',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        gtag: {
          trackingID: 'G-6HJVVRZJEF',
          anonymizeIP: true
        }
      }
    ]
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css',
      type: 'text/css'
    }
  ],
  themeConfig: {
    navbar,
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
      copyright: `Copyright © ${new Date().getFullYear()} yukaPriL. Built with Docusaurus.`
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: ['bash', 'diff', 'json'],
    }
  },
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
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
