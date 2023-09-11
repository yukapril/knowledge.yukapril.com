const docusaurusConfigNavbars = {
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
      type: 'docSidebar',
      label: '项目部署',
      sidebarId: 'publishTutorial',
      position: 'left'
    },
    {
      type: 'docSidebar',
      label: 'NPM 探索',
      sidebarId: 'npm',
      position: 'left'
    },
    {
      type: 'docSidebar',
      label: '机械键盘客制化入门',
      sidebarId: 'keyboard',
      position: 'left'
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
}

module.exports = docusaurusConfigNavbars
