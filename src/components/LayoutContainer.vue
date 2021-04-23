<template>
  <div class="container-layout">
    <sidebar />
    <header-component :user-data="user" />
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
import HeaderComponent from './elements/Header/Header.vue';

export default {
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    Sidebar,
    HeaderComponent,
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
