import http from '../../config/http/http';
import endpoints from '../../endpoints/endpoints';

const messagesModule = {
  namespaced: true,
  state: {
    participants: [],
    loaded: false,
    contacts: [],
  },
  actions: {
    async getMessages({ commit }, id) {
      return http.get(endpoints.getMessages(id)).then((messages) => {
        if (messages.data.participants) {
          commit('loadedMessages', true);
          commit('setParticipants', messages.data.participants);
        }

        return messages;
      });
    },
    async getContacts({ commit }) {
      return http.get(endpoints.getUserContacts).then((response) => {
        console.log(response);
        if (response.data) {
          commit('setUserContacts', response.data.contacts);
        }
        return response;
      });
    },
    clearParticipants({ commit }) {
      commit('clearParticipants');
    },
  },
  mutations: {
    setParticipants(state, data) {
      state.participants = data;
    },
    setUserContacts(state, contacts) {
      state.contacts = contacts;
    },
    clearParticipants(state) {
      state.participants = [];
    },
    loadedMessages(state, status) {
      state.loaded = status;
    },
  },
  getters: {
    getParticipants: (state) => state.participants,
    getUserContacts: (state) => state.contacts,
    messagesLoaded: (state) => state.loaded,
  },
};

export default messagesModule;
