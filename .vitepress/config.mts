import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/appweb-exer16/',

  title: "Atelier 16",
  description: "Atelier sur l'installation et l'utilisation de Vitepress",
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Page de Mathieu Bellavance', link: '/mathieu-bellavance' },
      { text: 'Page de Samuel St-Hilaire', link: '/samuel-st-hilaire' }
    ],
    
    sidebar: [
      {
        text: 'Revue de Code',
        items: [
          { text: 'Page de Mathieu Bellavance', link: '/mathieu-bellavance' },
          { text: 'Page de Samuel St-Hilaire', link: '/samuel-st-hilaire' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
