<template>
  <div class="container-layout">
    <sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from './elements/Sidebar/SidebarContainer.vue';
// import { mapGetters } from 'vuex';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
