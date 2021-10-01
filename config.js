import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyD7zPep1un1CxT9JtQi7JDwo5me4PzsD58",
    authDomain: "my-doctor-78432.firebaseapp.com",
    projectId: "my-doctor-78432",
    storageBucket: "my-doctor-78432.appspot.com",
    messagingSenderId: "845013664676",
    appId: "1:845013664676:web:45b716a6062cacb5297731"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()