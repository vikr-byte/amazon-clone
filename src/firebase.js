import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDS0AduZnzdfKzsvUur1qxcCrEnWcCCnSc",
  authDomain: "clone-60ef2.firebaseapp.com",
  databaseURL: "https://clone-60ef2.firebaseio.com",
  projectId: "clone-60ef2",
  storageBucket: "clone-60ef2.appspot.com",
  messagingSenderId: "469610001840",
  appId: "1:469610001840:web:7f022ddd0d1a71a9f81275",
  measurementId: "G-XBFPDR8RVP",
});

const auth = firebase.auth();

export { auth };
