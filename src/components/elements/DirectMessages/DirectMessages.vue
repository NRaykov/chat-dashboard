<template>
  <div>
    <v-row>
      <v-col lg="4">
        <div
          v-if="getUserFeed"
          class="card activites-panel"
        >
          <div
            v-for="(activity, index) in getUserFeed"
            :key="index"
          >
            <div class="info-panel">
                <div
                  class="info-inner"
                  @click="toggleVisibility(activity)"
                  v-if="activity.visible"
                >
                  <img class="icon-message" height="30" width="30" :src="'https://i.ibb.co/LQs8BMz/msg.png'" />
                  <span class="pt-2">
                    <strong>{{ activity.name }}</strong>
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
                    :src="activity.imageUrl"
                    width="40"
                    height="40"
                    class="rounded-circle border-green mr-2"
                    alt=""
                  />
                  <div class="d-flex flex-column">
                    <span>
                      <strong class="mr-2">{{ activity.name }}</strong>
                      <span class="responses">
                        {{ activity.meta.responses }} {{ $t("main.responses") }}
                      </span>
                    </span>
                    <span>{{ activity.meta.current_message }}</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col lg="8">
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
    ...mapGetters('messagesModule', ['getUserFeed']),
    ...mapGetters('messagesModule', ['messagesLoaded']),
  },
  mounted() {
    this.fetchFeed();
    this.fetchMessages(1231);
  },
  methods: {
    ...mapActions('messagesModule', ['fetchMessages']),
    ...mapActions('messagesModule', ['clearParticipants']),
    ...mapActions('messagesModule', ['fetchFeed']),

    toggleVisibility(item) {
      const activity = item;
      activity.visible = !activity.visible;
      if (!activity.visible) {
        this.clearParticipants();
        this.fetchMessages(activity.userId);
      }
    },
  },
};
</script>
