<template>
  <div class="main-layout">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import nav from '../_nav'
import AppHeader from '~/components/AppHeader'
import Sidebar from '~/components/Sidebar'
import Footer from '~/components/Footer'


export default {
  name: 'MainLayout',
  
  components: {
    AppHeader,
    Sidebar,
    Footer
  },
  data: () => ({
      appName: window.config.appName,
       nav: nav.items
    }),  
  computed: {
    name () {
      return this.$route.name
    },
    mapGetters() {
      user: 'auth/user'
    }
  }
}
</script>