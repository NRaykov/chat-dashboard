<template>
  <div class="direct-msgs-panel">
    <div
      v-if="getContacts[0]"
      class="sc"
    >
      <beautiful-chat
        :participants="getContacts"
        :on-message-was-sent="onMessageWasSent"
        :message-list="getContacts[0].messages"
        :disable-user-list-toggle="true"
        :new-messages-count="0"
        :show-header="true"
        :is-open="true"
        :close="closeChat"
        :show-close-button="false"
        :open="openChat"
        :show-emoji="true"
        :show-file="true"
        :show-deletion="true"
        :show-typing-indicator="''"
        :colors="colors"
        :always-scroll-to-bottom="false"
        :message-styling="true"
      >
        <template v-slot:header>
          <div class="chat-header">
            <h2>{{ getContacts.map(m=>m.name).join("&") }}</h2>
            <span>
             {{ getContacts[0].messages.length }}  {{ $t("main.responses") }}
            </span>
          </div>
        </template>
        <!-- HINT! v-slot:system-message-body doesn't work. Pull request with bugfix needed -->
        <template v-slot:system-message-body="{ message }">
          [System]: {{message.text}}
        </template>
      </beautiful-chat>
    </div>
  </div>
</template>
<script>
import colors from './colors';

export default {
  props: {
    getContacts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      colors,
    };
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } });
      }
    },
    // eslint-disable-next-line consistent-return
    onMessageWasSent(message) {
      if (this.getContacts[0].messages) {
        // eslint-disable-next-line no-return-assign
        return this.getContacts[0].messages = [...this.getContacts[0].messages, message];
      }
    },
    openChat() {
      return false;
    },
    closeChat() {
      return false;
    },
  },
};
</script>
