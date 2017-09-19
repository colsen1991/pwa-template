const isStatic = !!process.env.STATIC

module.exports = {
  css: [
    { src: './assets/style/other.scss', lang: 'sass' },
    { src: './assets/style/global.scss', lang: 'sass' }
  ],
  loading: {
    color: '#23d160'
  },
  manifest: {
    name: '{{ site_name }}',
    short_name: '{{ site_short_name }}',
    display: 'standalone',
    description: '{{ site_description }}',
    orientation: 'any',
    theme_color: '#fff'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  build: {
    extractCSS: true,
    vendor: [
      'buefy',
      'whatwg-fetch'
    ]
  },
  plugins: [
    './plugins/buefy',
    './plugins/components'
  ],
  head: {
    htmlAttrs: { lang: '{{ locale }}' },
    titleTemplate: '%s - {{ site_name }}',
    script: [ { src: 'https://use.fontawesome.com/992cf8b5f9.js', type: 'text/javascript', async: true } ],
    link: [
      { rel: 'favicon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
      { rel: 'me', href: '{{ author_homepage', type: 'text/html' }
    ],
    meta: [
      { name: 'title', content: '{{ site_name }}' },
      { name: 'description', content: '{{ site_description }}' },
      { name: 'theme-color', content: '#fff' },
      { property: 'og:title', content: '{{ site_name }}' },
      { property: 'og:description', content: '{{ site_description }}' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '{{ site_domain }}/logo.png' },
      { property: 'og:locale', content: '{{ locale }}' },
      { property: 'og:site_name', content: '{{ site_name}}' },
      { name: 'robots', content: 'noindex' /* TODO Change me and static/robots.txt before prod */ }
    ]
  },
  generate: {
    async routes () {
      return []
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: '{{ site_domain }}',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: []
  }
}
