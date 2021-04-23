<template>
  <div class="content">
    <v-container>
      <direct-messages />
    </v-container>
  </div>
</template>
<script>
import DirectMessages from '../../elements/DirectMessages/DirectMessages.vue';

export default {
  components: {
    DirectMessages,
  },
};
</script>
