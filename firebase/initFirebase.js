import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSSRAhLBMo6XuGTfiOwTM5JMk9GVpCSmE",
  authDomain: "boilerplate-b8f9c.firebaseapp.com",
  projectId: "boilerplate-b8f9c",
  storageBucket: "boilerplate-b8f9c.appspot.com",
  messagingSenderId: "507303788259",
  appId: "1:507303788259:web:3f86350d42efd5195dcfd6",
  measurementId: "G-EVSTQRGNF1",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
