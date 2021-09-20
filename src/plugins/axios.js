import axios from 'axios';
import Vue from 'vue'; // in Vue 2
import VueAxios from 'vue-axios';
//import store from '../store/index';

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL;

axios.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');

    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/* axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response.status === 401) {
      store.dispatch('auth/logout');
    }

    return Promise.reject(error);
  }
);
 */
console.log(axios.defaults.baseURL);
Vue.use(VueAxios, axios);
