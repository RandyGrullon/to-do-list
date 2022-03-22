import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD3qYyz9KuEFanRhgVh7X93-hE9MzMCUJc",
  authDomain: "todoapplist-84133.firebaseapp.com",
  projectId: "todoapplist-84133",
  storageBucket: "todoapplist-84133.appspot.com",
  messagingSenderId: "197511974966",
  appId: "1:197511974966:web:817ac8a074f6a929a8c897"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();



export default db;

