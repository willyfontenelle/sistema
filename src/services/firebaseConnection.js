import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA9jMNwTY-3gy3NCqByn8IwE3u2ir89rp4",
  authDomain: "sistema-4065d.firebaseapp.com",
  projectId: "sistema-4065d",
  storageBucket: "sistema-4065d.appspot.com",
  messagingSenderId: "1063927232298",
  appId: "1:1063927232298:web:7ff5b2df49ce52b8d89053",
  measurementId: "G-878J3BZ7JQ"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };