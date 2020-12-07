import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqRc2bX8NWV_m6rJd9-Re5knO3T70bBeE",
    authDomain: "chat-d1ca8.firebaseapp.com",
    databaseURL: "https://chat-d1ca8.firebaseio.com",
    projectId: "chat-d1ca8",
    storageBucket: "chat-d1ca8.appspot.com",
    messagingSenderId: "273310272820",
    appId: "1:273310272820:web:3617960ac37b6461dae961"
  };

  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);