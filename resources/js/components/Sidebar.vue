<template>
  <div v-if="user" class="sidebar">
    <SidebarHeader/>
    <SidebarForm/>
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav">
        <template v-for="item in navItems.filter(t => t.role === '' || t.role.split('|').filter(x =>  x === user.role)[0])">
          <template v-if="item.title">
            <SidebarNavTitle :name="item.name" :classes="item.class" :wrapper="item.wrapper" :icon="item.icon"/>
          </template>
          <template v-else-if="item.divider">
            <li class="divider"></li>
          </template>
          <template v-else>
            <template v-if="item.children">
              <!-- First level dropdown -->
              <SidebarNavDropdown :name="item.name" :url="item.url" :icon="item.icon">
                <template v-for="childL1 in item.children">
                  <template v-if="childL1.children">
                    <!-- Second level dropdown -->
                    <SidebarNavDropdown :name="childL1.name" :url="childL1.url" :icon="childL1.icon">
                      <li class="nav-item" v-for="(childL2, index) in childL1.children">
                        <SidebarNavLink :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="item.variant"/>
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <SidebarNavItem :classes="item.class">
                      <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant"/>
                    </SidebarNavItem>
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavItem :classes="item.class">
                <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
              </SidebarNavItem>
            </template>
          </template>
        </template>
      </ul>
      <slot></slot>
    </nav>
    <SidebarFooter/>
    <SidebarMinimizer/>
  </div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import SidebarFooter from './SidebarFooter.vue'
import SidebarForm from './SidebarForm.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarMinimizer from './SidebarMinimizer.vue'
import SidebarNavDropdown from './SidebarNavDropdown.vue'
import SidebarNavLink from './SidebarNavLink.vue'
import SidebarNavTitle from './SidebarNavTitle.vue'
import SidebarNavItem from './SidebarNavItem.vue'
export default {
    name: 'sidebar',
    props: {
        navItems: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    computed: mapGetters({
        user: 'auth/user'
    }),
    components: {
        SidebarFooter,
        SidebarForm,
        SidebarHeader,
        SidebarMinimizer,
        SidebarNavDropdown,
        SidebarNavLink,
        SidebarNavTitle,
        SidebarNavItem
    },
    methods: {
        handleClick(e) {
            e.preventDefault()
            e.target.parentElement.classList.toggle('open')
        }
    }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
