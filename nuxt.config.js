import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - newgee',
    title: 'newgee',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "~/assets/css/font.css",
    "~/assets/css/typography.css",
    "~/assets/css/font.css",
    "~/assets/css/main.css",
    "~/assets/css/animation.css",
    "~/assets/css/container.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vuetify.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: false,
  //     themes: {
  //       light: {
  //         primary: '#13AA52',
  //         secondary: '#21313C',
  //         accent: '#009688',
  //         error: '#E74C3C',
  //         warning: '#ffeb3b',
  //         info: '#00bcd4',
  //         success: '#2EE17A',
  //         SweetCorn: '#F7DC6F',
  //         Solitude: '#F0F2F5',
  //         MediumAquamarine: '#64C5B1',
  //         Lavender: '#F0F0F1',
  //         DodgerBlue: "#0082FD",
  //         Salem: '#12924F',
  //         MoonYellow: '#F1C40F',
  //         Grey: '#7D7D7D',
  //         MidGrey: '#636D77',
  //         Nero: '#272727',
  //         LightSlateGrey: '#87919B',
  //         ShuttleGrey: '#606870',
  //         Cultured: '#F5F6F7',
  //         Gainsboro: '#DFDFDF',
  //         DimGray: "#636D77",
  //         Gunmetal: "#263742",
  //         redAccent: '#EB5757',
  //         MainBtn: "8E66FF",
  //       },
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: '#2EE17A',
  //         redAccent:'#EB5757',
  //         formBack: '#111A17',
  //         MainBtn: "8E66FF",
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
  }
}
