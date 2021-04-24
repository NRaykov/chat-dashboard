<template>
  <div class="filter-panel">
    <v-row>
      <v-col md="6">
        <div class="filter-left-panel">
          <v-select
            :items="selectAll"
            filled
            label="All"
            solo
            dense
            class="select-all"
          ></v-select>
          <v-select
            :items="selectRecent"
            filled
            label="Most recent"
            solo
            dense
            class="select-recent"
          ></v-select>
        </div>
      </v-col>
      <v-col
        md="6"
        class="d-flex justify-end"
       >
        <v-btn
          color="warning"
          dark
          @click.stop="dialog = true"
        >
          <v-icon class="mr-3" small>
            mdi-email-outline
          </v-icon>
          {{ $t("main.message")}}
        </v-btn>
        <v-dialog
          v-model="dialog"
          max-width="450"
        >
          <v-card>
            <v-card-title class="headline">
             <h3> {{ $t("main.sendMessage" )}} </h3>
            </v-card-title>

            <v-card-text>
              <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        md="12"
                      >
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        md="12"
                      >
                        <v-textarea
                          name="textarea-message"
                          label="Message"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
            </v-card-text>

            <v-card-actions class="email-form-footer">
              <v-spacer></v-spacer>
              <v-btn
                color="success"
                :disabled="!valid"
                :class="{'disabled': !valid}"
                @click="dialog = false"
              >
                <v-icon class="mr-3" small>
                  mdi-email-outline
                </v-icon>
                {{ $t("main.send")}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      selectAll: [
        'All activities',
      ],
      selectRecent: [
        'Most recent',
      ],
      dialog: false,
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  computed: {
    ...mapGetters('messagesModule', ['getUserFeed']),
  },
};
</script>
