// .vuepress/config.js
module.exports = {
    title: 'Peter\'s Notes',
    description: 'Collection of learning notes',
    themeConfig: {
      sidebar: [
        ['/', 'Overview'],
        '/ML/',
      ] 
    },  
    plugins: [
      [
        'vuepress-plugin-mathjax',
        {
          target: 'svg',
          macros: {
            '*': '\\times',
          },
        },
      ],
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }]
    ],
  }