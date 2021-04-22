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
  /**
  * Overrides Vuetify CSS
  **/

  /* Globals */
  html { font-size: 62.5%; }

  /* Icons */
  .theme--light {
    .v-icon {
      color: inherit;
    }
  }

</style>
