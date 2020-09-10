import axios from 'axios';
import authHeader from './auth-header';

class UserService {

 get(url) {
     return axios.get(url, {headers: authHeader()})
 }

  getPublicContent(url) {
    return axios.get(url + 'all');
  }

  getUserBoard(url) {
    return axios.get(url + 'user', { headers: authHeader() });
  }

  getModeratorBoard(url) {
    return axios.get(url + 'mod', { headers: authHeader() });
  }

  getAdminBoard(url) {
    return axios.get(url + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
