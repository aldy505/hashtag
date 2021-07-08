export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hashtags - Generate Random Hashtags',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ],
    link: [
      {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
      {rel: 'icon', type: 'image/png', href: '/favicon.png'},
      {rel: 'alternate icon', href: '/favicon.ico'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Limelight'},
    ],
  },
  publicRuntimeConfig: {
    siteName: 'Hashtags - Generate Random Hashtags',
    siteDescription: 'Get 10 or 30 random hashtags from your long list of hashtags!',
    siteImage: 'https://hashtag.reinaldyrafli.com/social.jpg',
    baseURL: 'https://hashtag.reinaldyrafli.com',
    themeColor: '#f9fafb',
    siteLocale: 'en_US',
    myName: 'Reinaldy Rafli',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/clipboard.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-windicss',
    'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
