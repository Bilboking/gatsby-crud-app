 // web app's Firebase configuration
  
import firebase from "firebase/app"
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAIOz_gNxsIy3g_gAkoNy4RDrouGExyh0U",
    authDomain: "gatsby-crud2.firebaseapp.com",
    projectId: "gatsby-crud2",
    storageBucket: "gatsby-crud2.appspot.com",
    messagingSenderId: "216721100802",
    appId: "1:216721100802:web:54136d090d3ae39792d71b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase