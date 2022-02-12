import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './assets/css/index.css';
import animate from 'animate.css';

Vue.use(animate);

Vue.config.productionTip = false;

document.title = 'ricr.dev - ToDo List'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
