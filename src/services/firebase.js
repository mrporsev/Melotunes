import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDoWfwk5_FDjxRZetvds4tBXB1kFDdDtZI",
    authDomain: "melotunes-83f71.firebaseapp.com",
    projectId: "melotunes-83f71",
    storageBucket: "melotunes-83f71.appspot.com",
    messagingSenderId: "604571258200",
    appId: "1:604571258200:web:4a447c5e110f9f969ae92d",
    measurementId: "G-J7YVY512ZQ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth;
  export const db = firebase.database();
  export default fire;