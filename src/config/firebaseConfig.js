import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkFw0iywq4aT5zZkxDoSLt5cklPfj79SM",
  authDomain: "grace-yan-growingtree.firebaseapp.com",
  databaseURL: "https://grace-yan-growingtree.firebaseio.com",
  projectId: "grace-yan-growingtree",
  storageBucket: "grace-yan-growingtree.appspot.com",
  messagingSenderId: "328900197980",
  appId: "1:328900197980:web:631a8a030d390065d37099",
  measurementId: "G-GKXVEZQKQH",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
