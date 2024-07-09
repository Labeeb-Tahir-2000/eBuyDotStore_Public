  import firebase from 'firebase';
  import 'firebase/storage';
  // add you own firbase keys / information here
  export const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  });