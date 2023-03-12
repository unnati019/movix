import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyACz2p0Uz8TlseopNW2bBU3Bb86TQdxEwI",
  authDomain: "movix-2.firebaseapp.com",
  projectId: "movix-2",
  storageBucket: "movix-2.appspot.com",
  messagingSenderId: "570660485313",
  appId: "1:570660485313:web:fba4c50376612126b07c40",
  measurementId: "G-BMVKVVKWWN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };