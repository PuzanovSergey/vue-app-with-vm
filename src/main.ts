import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueVue, { test } from 'vue-mapp-webpack';
// const Test = require('vue-mapp-webpack');

console.log(VueVue, test);

Vue.config.productionTip = false;
// Vue.use(VueMapp);

// Vue.component('vm-button', VueMappButton);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
