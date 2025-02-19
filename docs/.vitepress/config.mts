import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mei Xue English",
  description: "Learning English with Taylor Swift",
  base: '/mei/',
  outDir: '../public',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'All Too Well', link: '/all-too-well' },
          { text: 'Anti-Hero', link: '/anti-hero' },
          { text: 'august', link: '/august' },
          { text: 'Begin Again', link: '/begin-again' },
          { text: 'Cornelia Street', link: '/cornelia-street' },
          { text: 'Cruel Summer', link: '/cruel-summer' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
