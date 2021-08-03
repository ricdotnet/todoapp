import Vue from 'vue';
import App from './App.vue';
import router from './router';
//import axios from 'axios'
//import VueAxios from 'vue-axios'

import './assets/css/index.css';
import animate from 'animate.css';

Vue.use(animate);

Vue.prototype.$api = 'https://ricrdev-todoapi.herokuapp.com';

// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";
// Import the plugin here
import { Auth0Plugin } from "./auth";
// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;
//Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


//https://todoapp.ricr.dev/