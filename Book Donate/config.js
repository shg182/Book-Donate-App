import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCSvEZl9eHwKRI50ajE8ouhwOsxkaNwu14",
    authDomain: "without-rules-8d418.firebaseapp.com",
    projectId: "without-rules-8d418",
    storageBucket: "without-rules-8d418.appspot.com",
    messagingSenderId: "571114514372",
    appId: "1:571114514372:web:d221c07721fbc4045da691",
    measurementId: "G-C9TVRFXQN2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
