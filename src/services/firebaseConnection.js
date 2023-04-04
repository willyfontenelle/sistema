import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDNmdm58aPftWdFQEUNtTUo8nmulaMzRNY",
  authDomain: "tickets-f96f4.firebaseapp.com",
  projectId: "tickets-f96f4",
  storageBucket: "tickets-f96f4.appspot.com",
  messagingSenderId: "822506994145",
  appId: "1:822506994145:web:3b4553b6b6e8552f28baa0",
  measurementId: "G-MJ01WPBRV2"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };