<template>
  <v-app>
    <layout-container />
  </v-app>
</template>

<script>
import LayoutContainer from './components/LayoutContainer.vue';

export default {
  name: 'App',
  components: {
    LayoutContainer,
  },
};
</script>
<style lang="scss">
  @import '@/assets/scss/vuetify/vuetify.scss';
</style>
