import { cloneDeep } from 'lodash';
import http from '../../config/http/http';
import endpoints from '../../endpoints/endpoints';
import UserModel from '../../models/userModel';

const userModule = {
  namespaced: true,
  state: {
    user: cloneDeep(UserModel),
    loaded: false,
  },
  actions: {
    fetchUser({ commit }) {
      return http.get(endpoints.user).then((response) => {
        if (!response) {
          return;
        }
        commit('setUser', response.data.user);
      });
    },
  },
  mutations: {
    loadedStatus(state, status) {
      state.loaded = status;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isLoaded: (state) => state.loaded,
    getUser: (state) => state.user,
  },
};

export default userModule;
