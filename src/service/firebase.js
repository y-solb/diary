// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
