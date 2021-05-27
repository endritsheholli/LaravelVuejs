<template>
  <header class="app-header navbar">
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
      <span class="navbar-toggler-icon">
        <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
        {{ appName }}
      </router-link>
      </span>
    </button>

    <b-link class="navbar-brand" :to="{ name: user ? 'dashboard' : 'login' }"></b-link>
    <template v-if="user">
      <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" @click="sidebarToggle">
        <span class="navbar-toggler-icon"></span>
      </button>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <HeaderDropdownNotif/>
        </b-nav-item>
        <b-nav-item class="px-3">
          <LocaleDropdown/>
        </b-nav-item>
        <HeaderDropdownAccnt/>
      </b-navbar-nav>
    </template>
    <template v-else>
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3">
          <router-link :to="{ name: 'login' }" class="nav-link">
            {{ $t('login') }}
          </router-link>
        </b-nav-item>
        <b-nav-item class="px-3">
          <LocaleDropdown/>
        </b-nav-item>
      </b-navbar-nav>
    </template>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import HeaderDropdownAccnt from "./HeaderDropdownAccnt.vue";
import HeaderDropdownNotif from "./HeaderDropdownNotif.vue";
import LocaleDropdown from "./LocaleDropdown.vue";

export default {
  name: "header",
  components: {
    HeaderDropdownAccnt,
    HeaderDropdownNotif,
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),
  computed: mapGetters({
    user: "auth/user"
  }),
  methods: {
    sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-hidden");
    },
    sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-minimized");
    },
    mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-mobile-show");
    },
    async logout() {
      // Log out the user.
      await this.$store.dispatch("auth/logout");

      // Redirect to login.
      this.$router.push({ name: "login" });
    }
  }
};
</script>
