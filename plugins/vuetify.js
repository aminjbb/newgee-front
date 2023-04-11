import Vue from 'vue'
import Vuetify from 'vuetify'


import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    // rtl: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#13AA52',
          secondary: '#21313C',
          accent: '#009688',
          error: '#E74C3C',
          warning: '#ffeb3b',
          info: '#00bcd4',
          success: '#2EE17A',
          SweetCorn: '#F7DC6F',
          Solitude: '#F0F2F5',
          MediumAquamarine: '#64C5B1',
          Lavender: '#F0F0F1',
          DodgerBlue: "#0082FD",
          Salem: '#12924F',
          MoonYellow: '#F1C40F',
          Grey: '#7D7D7D',
          MidGrey: '#E0E0E0',
          Nero: '#272727',
          LightSlateGrey: '#87919B',
          ShuttleGrey: '#606870',
          Cultured: '#F5F6F7',
          Gainsboro: '#DFDFDF',
          DimGray: "#636D77",
          Gunmetal: "#263742",
          redAccent: '#EB5757',
          MainBtn: "#8E66FF",
          Grey2: "#BDBDBD",
          Mauve:'#CAB0FF',
          RedOrange:'#FF4500',
          FlashWhite:"#F2F2F2",
          OldSilver:"#828282"
        },
        dark: {
          MainBtn: "#8E66FF",
          TournomentCard:"#121212",
          green:'#2EE17A',
          Grey2: "#BDBDBD",
        }
      }
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}