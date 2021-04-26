import http from '../../config/http/http';
import endpoints from '../../endpoints/endpoints';

const messagesModule = {
  namespaced: true,
  state: {
    participants: [],
    loaded: false,
    feed: [],
  },
  actions: {
    fetchMessages({ commit }, id) {
      return http.get(endpoints.getMessages(id)).then((messages) => {
        if (messages.data.participants) {
          commit('loadedMessages', true);
          commit('setParticipants', messages.data.participants);
        }
        return messages;
      });
    },
    fetchFeed({ commit }) {
      return http.get(endpoints.getUserFeed).then((response) => {
        if (response.data) {
          commit('setUserFeed', response.data.feed);
        }
        return response;
      });
    },
    clearParticipants({ commit }) {
      commit('clearParticipants');
    },
    clearFeed({ commit }) {
      commit('clearParticipants');
    },
  },
  mutations: {
    setParticipants(state, data) {
      state.participants = data;
    },
    setUserFeed(state, feed) {
      state.feed = feed;
    },
    clearParticipants(state) {
      state.participants = [];
    },
    clearFeed(state) {
      state.feed = [];
    },
    loadedMessages(state, status) {
      state.loaded = status;
    },
  },
  getters: {
    getParticipants: (state) => state.participants,
    getUserFeed: (state) => state.feed,
    messagesLoaded: (state) => state.loaded,
  },
};

export default messagesModule;
