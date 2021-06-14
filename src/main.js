import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDzlNOOONM3LSgXqoLHExDWAwsDZ8Ho18I',
  authDomain: 'todo-app-2f1d6.firebaseapp.com',
  projectId: 'todo-app-2f1d6',
  storageBucket: 'todo-app-2f1d6.appspot.com',
  messagingSenderId: '483196268031',
  appId: '1:483196268031:web:f1a26dd1c8ecad9010cbca',
  measurementId: 'G-P4LQ8YTVQW',
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
