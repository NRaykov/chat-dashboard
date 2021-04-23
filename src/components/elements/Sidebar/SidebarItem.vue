<template>
  <router-link :to="{ name: navItem.name }" class="nav-item-parent">
    <div class="nav-item">
      <v-icon>
        {{ `mdi-${navItem.icon}` }}
      </v-icon>
        {{ navItem.title }}
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    navItem: {},
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>
