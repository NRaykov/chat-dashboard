import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/pages/Dashboard.vue';
import SidebarRouteNames from '../enums/sidebarRouteNames';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: SidebarRouteNames.DASHBOARD,
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes,
});

export default router;
