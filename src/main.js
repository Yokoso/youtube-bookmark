import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import VueFire from 'vuefire';
import 'firebase/firestore';

Vue.config.productionTip = false;
Vue.use(VueFire);

var config = {
    apiKey: "AIzaSyCLqF5ESkOdyup2fwinsFKLgeug40G-zJU",
    authDomain: "bookmark-52384.firebaseapp.com",
    databaseURL: "https://bookmark-52384.firebaseio.com",
    projectId: "bookmark-52384",
    storageBucket: "bookmark-52384.appspot.com",
    messagingSenderId: "692594211657"
};
firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
