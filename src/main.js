import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import VueFeather from 'vue-feather';
import BootstrapVue from 'bootstrap-vue'
import Breadcrumbs from './components/bread-crumbs.vue'
import store from './store'
import Toasted from 'vue-toasted';

Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueFeather);
Vue.use(Toasted, {
  iconPack: 'fontawesome'
});
Vue.component('Breadcrumbs', Breadcrumbs);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_iGjKYgArux3RvKHXCipC46CxD4pax-Q",
  authDomain: "evalley-hcmut.firebaseapp.com",
  projectId: "evalley-hcmut",
  storageBucket: "evalley-hcmut.appspot.com",
  messagingSenderId: "158272054899",
  appId: "1:158272054899:web:c306a63b76063b7d09ac06",
  measurementId: "G-2WTMF9H6Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import './assets/scss/app.scss'
import './assets/scss/admin.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
