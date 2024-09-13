import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SandRock",
  description: "Technical general documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Documentation', link: '/introduction' },
    //   { text: 'API', link: '/introduction' }
    // ],

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
                  { text: '📜 Introduction', link: '/development/plugins/introduction' },
                  { text: '🛠️ How to Create Plugins', link: '/development/plugins/create' },
                  { text: '📦 Plugin Marketplace', link: '/development/plugins/marketplace' },
                ]
              },
              {
                text: '🛠️ API Documentation',
                items: [
                  { text: '📄 Overview', link: '/development/api-doc/overview' },
                  { text: '🔌 Authentication', link: '/development/api-doc/auth' },
                  { text: '📊 Data Structures', link: '/development/api-doc/data-structures' },
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
                  { text: '💾 Model Import Guide', link: '/visual/models/import-guide' },
                ]
              }
            ]
          },
          
          {
            text: '🚀 Create a Server',
            items: [
              { text: '🔧 Installation', link: '/create-server/installation' },
              { text: '📂 Folder Structure', link: '/create-server/folder-structure' },
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
    

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
