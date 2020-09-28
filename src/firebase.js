import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDaXK0qsuFXOk1sDq5jpGeLxKIutB9QyWQ",
  authDomain: "clone-eb41d.firebaseapp.com",
  databaseURL: "https://clone-eb41d.firebaseio.com",
  projectId: "clone-eb41d",
  storageBucket: "clone-eb41d.appspot.com",
  messagingSenderId: "297449182095",
  appId: "1:297449182095:web:e982778470b3535d1071fa",
  measurementId: "G-WZCZ9FWK6T",
});

const auth = firebaseApp.auth();

export { auth };
