import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';

import firebase from 'firebase';
// import firebase from 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/custom.css';

import Waves from './components/Waves.vue';
import Modal from './components/Modal.vue'; 
import LoadingModal from './components/LoadingModal.vue';   
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);



// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtMCmVD-E5RSgY6ZqzdAKuFZCm2PJH3jw",
  authDomain: "ivytutorial-425c7.firebaseapp.com",
  projectId: "ivytutorial-425c7",
  storageBucket: "ivytutorial-425c7.appspot.com",
  messagingSenderId: "439025332857",
  appId: "1:439025332857:web:a52f2156bb06517d6bdaa8",
  measurementId: "G-Z4DYT2S6KQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const appFire = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appFire);

// export const auth = getAuth(appFire);
// export const db = getFirestore(appFire);

export const auth = firebase.auth();
export const db = firebase.firestore();

//export const storage = firebase.storage();


const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
app.component('waves', Waves) //Now we can use this component in any vue component!!!!  
app.component('Modal', Modal)
app.component('LoadingModal', LoadingModal)

router.isReady().then(() => {
  app.mount('#app');
});
