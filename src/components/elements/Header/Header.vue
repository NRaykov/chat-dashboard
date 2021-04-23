<template>
  <div class="header-panel">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="7"
        >
          <v-form
            ref="form"
          >
            <v-text-field
              v-model="search"
              :label="$t('main.SearchFor')"
              solo
              clearable
              class="search-input"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col
          v-if="userData"
          cols="12"
          md="5"
          class="d-flex align-center justify-end"
        >
          <div class="icons-panel">
            <div class="icon-item">
              <v-icon>
                mdi-bell-outline
              </v-icon>
              <span
                v-if="userData.notify_count > 0"
                class="counter"
              >
                {{ userData.notify_count }}
              </span>
            </div>
            <div class="icon-item">
              <v-icon>
                mdi-email-outline
              </v-icon>
              <span
                v-if="userData.messages_count > 0"
                class="counter"
              >
                {{ userData.messages_count }}
              </span>
            </div>
            <div class="icon-item">
              <v-icon>
                mdi-star-outline
              </v-icon>
              <span
                v-if="userData.followers_count > 0"
                class="counter"
              >
                {{ userData.followers_count }}
              </span>
            </div>
          </div>
          <div class="profile-pic-panel">
            <img :src="userData.prof_pic" class="profile-pic" />
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-breadcrumbs
          :items="crumbs"
          divider=">"
        ></v-breadcrumbs>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {
      search: '',
    };
  },
  computed: {
    crumbs() {
      const pathArray = this.$route.path.split('/');
      pathArray.shift();
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path,
          to: breadcrumbArray[idx - 1]
            ? `/${breadcrumbArray[idx - 1].path}/${path}`
            : `/${path}`,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, []);
      return breadcrumbs;
    },
  },
  created() {},
  methods: {},
};
</script>
