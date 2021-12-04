export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  router: {
    base: '/cook-wonder/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cook-wonder_frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
            integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", crossOrigin: "anonymous" },
      { rel: "preconnect", href:"https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com"},
      { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap", rel: "stylesheet" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global-style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
