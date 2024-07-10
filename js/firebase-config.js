const firebaseConfig = {
    apiKey: "AIzaSyBzJ2kqs5wwBx_E0ZA9F48s8mFjK5P_wgg",
    authDomain: "notes-732c0.firebaseapp.com",
    projectId: "notes-732c0",
    storageBucket: "notes-732c0.appspot.com",
    messagingSenderId: "1051026811901",
    appId: "1:1051026811901:web:4b253c0c1de85db728c794"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const storage = firebase.storage();