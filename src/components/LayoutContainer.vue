<template>
  <div class="container-layout">
    <sidebar />
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
import Sidebar from './elements/Sidebar/SidebarContainer.vue';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      prevHeight: 0,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    /*
    * Implement Transition on route change
    */
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      // eslint-disable-next-line no-param-reassign
      element.style.height = this.prevHeight;

      this.$nextTick(() => {
        // eslint-disable-next-line no-param-reassign
        element.style.height = height;
      });
    },
    afterEnter(element) {
      // eslint-disable-next-line no-param-reassign
      element.style.height = 'auto';
    },
  },
};
</script>
