const isStatic = process.env.STATIC === 'true'
const isStaging = process.env.STAGING === 'true'

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
  modules:  isStaging ? [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    ['@nuxtjs/google-analytics', {ua: isStaging ? 'STAGING' : 'CHANGEME'}]
  ] : [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {ua: isStaging ? 'STAGING' : 'CHANGEME'}]
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
    './plugins/responsive',
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
      { name: 'robots', content: isStaging ? 'noindex, nofollow' : 'index, follow' }
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
      '/404',
      'login',
      'logout'
    ]
  },
  workbox: {
    handleFetch: isStatic
  },
  router: isStaging ? {
    middleware: ['auth']
  } : undefined,
  auth: isStaging ? {
    strategies: {
      auth0: {
        domain: 'TODO:CHANGEME',
        client_id: 'TODO:CHANGEME'
      }
    }
  } : undefined
}
