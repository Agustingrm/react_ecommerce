import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCYPuJZI0r8R2VUZ87ZVxkvJXre6SV231o",
  authDomain: "finalprojectutnfrba.firebaseapp.com",
  projectId: "finalprojectutnfrba",
  storageBucket: "finalprojectutnfrba.appspot.com",
  messagingSenderId: "59163629536",
  appId: "1:59163629536:web:aecd8d81d35e6fe8febd85",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.db = firebase.firestore();
firebase.authentication = firebase.auth();

export default firebase;
