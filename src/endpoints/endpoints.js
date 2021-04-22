const endpoints = {
  navigation: `${process.env.VUE_APP_API}navigation.json`,
};

/**
 * A frozen object can no longer be changed;
 * freezing an object prevents new properties from being added to it,
 * existing properties from being removed
 */
Object.freeze(endpoints);

export default endpoints;
