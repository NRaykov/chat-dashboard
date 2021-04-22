import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/pages/Dashboard/Dashboard.vue';
import Tasks from '../components/pages/Tasks/Tasks.vue';
import SidebarRouteNames from '../enums/sidebarRouteNames';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: SidebarRouteNames.DASHBOARD,
    component: Dashboard,
  },
  {
    path: '/tasks',
    name: SidebarRouteNames.MY_TASKS,
    component: Tasks,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes,
});

export default router;
