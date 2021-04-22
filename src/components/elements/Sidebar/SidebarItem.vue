<template>
    <router-link :to="{ name: navItem.name }" class="nav-item">
      <v-icon>
        {{ `mdi-${navItem.icon}` }}
      </v-icon>
      {{ navItem.title }}
    </router-link>
</template>
<script>
export default {
  props: {
    navItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
