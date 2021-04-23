import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/userModule';
import navigationModule from './modules/navigationModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    navigationModule,
  },
});
