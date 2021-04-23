<template>
  <v-app>
    <layout-container :user="getUser" />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LayoutContainer from './components/LayoutContainer.vue';

export default {
  name: 'App',
  components: {
    LayoutContainer,
  },
  computed: {
    ...mapGetters('userModule', ['getUser']),
  },
  created() {
    this.fetchUser();
  },
  methods: {
    ...mapActions('userModule', ['fetchUser']),
  },
};
</script>
<style lang="scss">
  @import '@/assets/scss/vuetify/vuetify.scss';
</style>
