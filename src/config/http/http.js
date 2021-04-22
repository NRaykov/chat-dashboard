import axios from 'axios';
/**
 * Global HTTP requests service.
 * We can replace Axios with another library if needed"
 */
const http = {
  get: (url) => axios.get(url),
};

/**
 * A frozen object can no longer be changed;
 * freezing an object prevents new properties from being added to it,
 * existing properties from being removed
 */
Object.freeze(http);

export default http;
