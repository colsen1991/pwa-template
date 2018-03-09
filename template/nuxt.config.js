const isStatic = !!process.env.STATIC

module.exports = {
  css: [
    { src: './assets/style/index.scss', lang: 'sass' }
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
    theme_color: '#fff',
    background_color: '#fff'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    [ '@nuxtjs/google-analytics', { ua: 'CHANGEME' } ]
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extractCSS: true,
    vendor: []
  },
  plugins: [
    './plugins/components',
    './plugins/lazyload'
  ],
  head: {
    htmlAttrs: { lang: '{{ locale }}' },
    titleTemplate: '%s - {{ site_name }}',
    script: [ { src: 'https://use.fontawesome.com/releases/v5.0.6/js/all.js', type: 'text/javascript', async: true } ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'author', href: '/humans.txt' },
    ],
    meta: [
      { hid: 'description', name: 'description', content: '{{ site_description }}' },
      { name: 'theme-color', content: '#fff' },
      { hid: 'og:title', property: 'og:title', content: '{{ site_name }}' },
      { hid: 'og:description', property: 'og:description', content: '{{ site_description }}' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '{{ site_domain }}/logo.png' },
      { hid: 'twitter:image', property: 'twitter:image', content: '{{ site_domain }}/logo.png' },
      { property: 'og:site_name', content: '{{ site_name}}' },
      { name: 'robots', content: 'index, follow' }
    ]
  },
  generate: {
    routes: []
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: '{{ site_domain }}',
    cacheTime: 1000 * 60 * 15,
    generate: isStatic,
    routes: [],
    exclude: [
      '/404'
    ]
  },
  workbox: {
    handleFetch: isStatic
  }
}
