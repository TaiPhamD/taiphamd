// .vuepress/config.js
module.exports = {
    title: 'Peter Pham',
    description: 'Collection of learning notes',
    plugins: [
      [
        'vuepress-plugin-mathjax',
        {
          target: 'chtml',
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