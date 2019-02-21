import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import VueMapp from 'vue-mapp-webpack';
// import 'vue-mapp-webpack/dist/full.css';
import VueMappTest from 'vue-mapp-test';
import 'vue-mapp-test/dist/mainComponents.css';

Vue.config.productionTip = false;

Vue.use(VueMappTest);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
