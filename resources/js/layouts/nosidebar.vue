<template>
  <div class="main-layout">
    <AppHeader/>
    <div class="app-body">
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <Footer/>>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '~/components/AppHeader'
import Footer from '~/components/Footer'

export default {
  name: 'NoSidebarLayout',

  components: {
    AppHeader,
    Footer
  },
  data: () => ({
    appName: window.config.appName,
  }),
  computed: mapGetters({
    user: 'auth/user'
  }),
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
