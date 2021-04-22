import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import i18n from './config/i18n/i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
