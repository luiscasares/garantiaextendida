import Vue from 'vue';
import App from './App.vue';
import './plugins/axios';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

// For more options see below

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
