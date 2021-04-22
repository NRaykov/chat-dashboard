<template>
  <div class="sidebar-panel"
       v-if="getSidebarItems"
  >
    <div class="logo-panel">
      <a href="/">
        <img src="@/assets/images/logo.png" alt="IntelMe" height="50px" class="logo">
      </a>
    </div>
    <div v-for="item in getSidebarItems" :key="item.id"
         class="nav-item-parent"
    >
      <sidebar-item :nav-item="item" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SidebarItem from './SidebarItem.vue';

export default {
  components: {
    SidebarItem,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters('navigationModule', ['getSidebarItems']),
  },
  created() {
    this.fetchSidebar();
  },
  methods: {
    ...mapActions('navigationModule', ['fetchSidebar']),
  },
};
</script>
