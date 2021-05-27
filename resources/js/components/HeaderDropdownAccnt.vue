<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <span><i class="icon-user icons font-2xl d-block"></i></span>
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
        <b-dropdown-item @click.prevent="profile"><i class="fa fa-user"></i>
            {{ $t('profile') }}
        </b-dropdown-item>
        <b-dropdown-item @click.prevent="password"><i class="fa fa-lock"></i>
            {{ $t('password') }}
        </b-dropdown-item>
        <b-dropdown-item @click.prevent="logout"><i class="fa fa-lock"></i>
            {{ $t('logout') }}
        </b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown-accnt',
    data: () => {
      return { itemsCount: 42 }
    },
    methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },
    profile(){
      this.$router.push({name:'settings.profile'})
    },
    password(){
      this.$router.push({name:'settings.password'})
    }
  }
  }
</script>
