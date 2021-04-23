import { cloneDeep } from 'lodash';
import http from '../../config/http/http';
import endpoints from '../../endpoints/endpoints';
import SidebarModel from '../../models/sidebarModel';

const sidebarModule = {
  namespaced: true,
  state: {
    sidebar: cloneDeep(SidebarModel),
    loaded: false,
  },
  actions: {
    fetchSidebar({ commit }) {
      return http.get(endpoints.navigation).then((response) => {
        if (!response) {
          return;
        }
        commit('setSidebarItems', response.data.sidebar);
      });
    },
  },
  mutations: {
    loadedStatus(state, status) {
      state.loaded = status;
    },
    setSidebarItems(state, sidebar) {
      state.sidebar = sidebar;
    },
  },
  getters: {
    isLoaded: (state) => state.loaded,
    getSidebarItems: (state) => state.sidebar,
  },
};

export default sidebarModule;
