<template>
  <div>
    <v-row>
      <v-col lg="6">
        <div
          v-if="getUserContacts"
          class="card contacts"
        >
          <div
            v-for="(contact, index) in getUserContacts"
            :key="index"
          >
          <div v-for="(activity, index) in contact.activities" :key="index"
              class="d-flex align-center info-panel">
              <div
                class="info-inner"
                @click="toggleVisibility(activity)"
                v-if="activity.visible"
              >
                  <img class="icon-message" height="30" width="30" :src="'https://i.ibb.co/LQs8BMz/msg.png'" />
                  <span class="pt-2">
                    <strong>{{ contact.name }}</strong>
                      {{ activity.status }}
                      <span class="timestamp">{{ activity.timestamp }}</span>
                  </span>
              </div>
              <div
                class="contacts-item"
                @click="toggleVisibility(activity)"
                v-if="!activity.visible"
              >
                <img
                  :src="contact.imageUrl"
                  width="36"
                  height="36"
                  class="rounded-circle mr-2"
                  alt=""
                />
                <span>{{ contact.name }}</span>
              </div>
          </div>
          </div>
        </div>
      </v-col>
      <v-col lg="6">
        <div
          v-if="messagesLoaded"
          class="card"
        >
          <chat
            :get-contacts="getParticipants"
            :reload-chat="reloadChat"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Chat from './Chat.vue';

export default {
  components: {
    Chat,
  },
  data() {
    return {
      reloadChat: false,
    };
  },
  computed: {
    ...mapGetters('messagesModule', ['getParticipants']),
    ...mapGetters('messagesModule', ['getUserContacts']),
    ...mapGetters('messagesModule', ['messagesLoaded']),
  },
  mounted() {
    this.getContacts();
    this.getMessages(1231);
  },
  methods: {
    ...mapActions('messagesModule', ['getMessages']),
    ...mapActions('messagesModule', ['clearParticipants']),
    ...mapActions('messagesModule', ['getContacts']),

    toggleVisibility(item) {
      const activity = item;
      activity.visible = !activity.visible;
      if (!activity.visible) {
        this.clearParticipants();
        this.getMessages(activity.userId);
      }
    },
  },
};
</script>
