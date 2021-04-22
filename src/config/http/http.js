import axios from 'axios';
/**
 * Global HTTP requests service.
 * We can replace Axios with another library if needed"
 */
const httpGET = (url) => {
   return axios.get(url);
}

export { httpGET }