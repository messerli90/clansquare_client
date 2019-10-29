export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['bulma', '@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    './plugins/mixins/user',
    './plugins/axios.js',
    './plugins/mixins/validation'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    // GitHub: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  /*
   **  Register middleware and routes
   **
   */
  router: {
    middleware: ['clearValidationErrors']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://clansquare_new.test/api',
    // host: 'clansquare_new.test',
    // prefix: 'api/',
    // https: true,
    progress: true
  },
  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/schemes/local.html#usage
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'meta.token'
          },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: 'data' }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      }
    },
    token: {
      prefix: '_ctoken.'
    },
    localStorage: {
      prefix: 'auth.'
    },
    redirect: {
      login: '/auth/signin',
      logout: '/',
      home: '/dashboard',
      callback: '/'
    }
  },
  styleResources: {
    scss: ['./assets/*.scss']
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: ['faEnvelope', 'faHeart', 'faLock']
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: [
          'faDev',
          'faFacebook',
          'faTwitter',
          'faInstagram',
          'faYoutube',
          'faGithub'
        ]
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
