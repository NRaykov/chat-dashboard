import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../components/pages/Dashboard/Dashboard.vue';
import Tasks from '../components/pages/Tasks/Tasks.vue';
import Projects from '../components/pages/Projects/Projects.vue';
import People from '../components/pages/People/People.vue';
import Statistics from '../components/pages/Statistics/Statistics.vue';
import Help from '../components/pages/Help/Help.vue';
import Settings from '../components/pages/Settings/Settings.vue';
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
  {
    path: '/projects',
    name: SidebarRouteNames.MY_PROJECTS,
    component: Projects,
  },
  {
    path: '/people',
    name: SidebarRouteNames.PEOPLE,
    component: People,
  },
  {
    path: '/statistics',
    name: SidebarRouteNames.STATISTICS,
    component: Statistics,
  },
  {
    path: '/help',
    name: SidebarRouteNames.HELP,
    component: Help,
  },
  {
    path: '/settings',
    name: SidebarRouteNames.SETTINGS,
    component: Settings,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes,
});

export default router;
