import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SandRock",
  description: "Technical general documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/markdown-examples' },
      { text: 'API', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Rolem Documentation',
        items: [
          { text: '🏁 Introduction', link: '/introduction' },
          { text: '📊 Project Status', link: '/project-status' },
          
          {
            text: '⚙️ Development',
            items: [
              {
                text: '🧩 Plugins',
                items: [
                  { text: '📜 Introduction', link: './plugins/introduction' },
                  { text: '🛠️ How to Create Plugins', link: '/plugins/create' },
                  { text: '📦 Plugin Marketplace', link: '/plugins/marketplace' },
                ]
              },
              {
                text: '🛠️ API Documentation',
                items: [
                  { text: '📄 Overview', link: '/api/overview' },
                  { text: '🔌 Authentication', link: '/api/authentication' },
                  { text: '📊 Data Structures', link: '/api/data-structures' },
                ]
              },
            ]
          },
          
          {
            text: '🎨 Visual',
            items: [
              {
                text: '🗺️ Maps',
                items: [
                  { text: '🌍 Map Editor', link: '/visual/maps/editor' },
                  { text: '🧭 Map Import/Export', link: '/visual/maps/import-export' },
                ]
              },
              {
                text: '🎮 Models',
                items: [
                  { text: '📐 3D Model Formats', link: '/visual/models/formats' },
                  { text: '💾 Model Import Guide', link: '/visual/models/import' },
                ]
              }
            ]
          },
          
          {
            text: '🚀 Create a Server',
            items: [
              { text: '🔧 Installation', link: '/getting-started/installation' },
              { text: '📂 Folder Structure', link: '/getting-started/folder-structure' },
              // { text: '🖥️ Setting Up Environment', link: '/getting-started/setup-environment' },
            ]
          },
          
          {
            text: '💬 Support',
            items: [
              { text: '❓ FAQ', link: '/support/faq' },
              { text: '🐞 Report Issues', link: '/support/report-issues' },
            ]
          },
        ],
      }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
