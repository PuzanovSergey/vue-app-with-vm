import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMapp from 'vue-mapp-webpack';
import 'vue-mapp-webpack/dist/full.css';

Vue.config.productionTip = false;

Vue.use(VueMapp);
// Vue.component('vm-button-test', VueMappButton);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
