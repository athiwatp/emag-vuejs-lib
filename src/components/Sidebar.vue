<template>
    <div id="sidebar" class="sidebar sidebar-fixed">
        <div class="sidebar-outer scrollable default-skin" tabindex="-1">
            <div class="viewport">
                <div class="overview">
                    <ul class="sidebar-inner">
                        <li v-for="item in items"
                            :class="getMenuItemCssClass(item)">
                            <sidebar-item :item="item"></sidebar-item>
                            <div class="menu-item-data">
                                <sidebar-item :item="item" :collapsed="true"></sidebar-item>
                                <submenu :item="item" v-if="item.children && item.children.length"></submenu>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <sidebar-control></sidebar-control>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Submenu from './Submenu'
import SidebarItem from './SidebarItem'
import SidebarControl from './SidebarControl'
import sidebarMixin from './../mixins/Sidebar'

export default {
  name: 'sidebar',
  props: ['dataOptions'],
  mixins: [sidebarMixin],
  computed: {
    locale: function () {
      return this.$store.state.config.locale
    },
    items: function () {
      return this.getItems()
    }
  },
  components: {
    Submenu, SidebarItem, SidebarControl
  },
  mounted () {
    /* eslint-disable no-undef */
    try {
      let routePath = this.$route.path
      if (this.$router.mode === 'hash') {
        routePath = '#' + routePath
      }
      // Methods from emag-apps-ui-kit
      initSidebarEvents()
      staticNavigation(routePath)
      initScrollbarForSidebar()
    } catch (ex) {}
  }
}
</script>
