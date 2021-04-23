/**
 * UserModel, @member of interface
 */
const UserModel = {
  id: 0,
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@dole.com',
  notify_count: 0,
  messages_count: 0,
  followers_count: 0,
  prof_pic: 'placeholder',

  auth: 'fasle',
};

/**
 * A frozen object can no longer be changed;
 * freezing an object prevents new properties from being added to it,
 * existing properties from being removed
 */
Object.freeze(UserModel);

export default UserModel;
