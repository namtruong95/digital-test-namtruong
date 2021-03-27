import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router, { constantRoutes } from "./router";
import store from "./store";
import { NavbarModule } from './store/modules/navbar';

Vue.config.productionTip = false;

NavbarModule.GenerateRoutes(constantRoutes);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
