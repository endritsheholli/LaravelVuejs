import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueTabs)
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
