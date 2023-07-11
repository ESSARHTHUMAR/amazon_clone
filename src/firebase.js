import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRhOowQhYJ2OiKzL9GZD7Syt-pTbuGgBU",
    authDomain: "fake-adde9.firebaseapp.com",
    projectId: "fake-adde9",
    storageBucket: "fake-adde9.appspot.com",
    messagingSenderId: "150902678816",
    appId: "1:150902678816:web:ca4e03df80756bea5f2345",
    measurementId: "G-7S417K304Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};