const endpoints = {
  user: `${process.env.VUE_APP_API}user.json`,
  navigation: `${process.env.VUE_APP_API}navigation.json`,
  getUserFeed: `${process.env.VUE_APP_API}messages/feed.json`,
  getMessages(id) {
    return `${process.env.VUE_APP_API}messages/${id}.json`;
  },
};

/**
 * A frozen object can no longer be changed;
 * freezing an object prevents new properties from being added to it,
 * existing properties from being removed
 */
Object.freeze(endpoints);

export default endpoints;
