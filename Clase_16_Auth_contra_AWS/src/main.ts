import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsExports);

// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: 'AIzaSyAM1SOI1GI4Y6tsdN7XrlBK09kMPb1lpIQ',
//   authDomain: 'proyecto-vue-5f757.firebaseapp.com',
//   projectId: 'proyecto-vue-5f757',
//   storageBucket: 'proyecto-vue-5f757.appspot.com',
//   messagingSenderId: '929649409184',
//   appId: '1:929649409184:web:173023816d8cee871a1dc5',
//   measurementId: 'G-XNB2HC9LT7'
// }

// initializeApp(firebaseConfig)
const app = createApp(App);
app.use(router);
app.mount('#app');
