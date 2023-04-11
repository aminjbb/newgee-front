<template>
  <v-app dark>

    <v-main class="home-page">
      <div class="main-container">

        <v-row class="ma-0 d-flex align-center">
          <v-app-bar-nav-icon @click.stop="Drawer = !Drawer" class="hidden-md-and-up" />
          <v-col cols="3">
            <Logo />
          </v-col>
          <v-col cols="5">
            <SearchBar />
          </v-col>

          <!-- <NavigationMenu class="hidden-sm-and-down" /> -->
          <!-- <v-spacer></v-spacer> -->
          <v-col cols="4">
            <div class="pt-8">
              <LoginRegisterBtn />
            </div>

          </v-col>


          <!-- <ProfileNavigationBtn v-if="isLogin" /> -->
        </v-row>



      </div>
      <div class="main-container">
        <Nuxt />
      </div>

    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import Logo from '../components/Home/Logo'
import LoginRegisterBtn from '../components/Home/LoginRegisterBtn'
import SearchBar from '../components/Home/SearchBar'
export default {

  components: {
    LoginRegisterBtn,
    Logo,
    SearchBar
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
