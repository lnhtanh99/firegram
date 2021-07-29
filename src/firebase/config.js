import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCwSQnCSZGBC9QgBPfXI3_TSAhHh4_o058",
    authDomain: "firegram-1eb5e.firebaseapp.com",
    projectId: "firegram-1eb5e",
    storageBucket: "firegram-1eb5e.appspot.com",
    messagingSenderId: "550300162466",
    appId: "1:550300162466:web:0b9347e4d7e9a0bd9cbafb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };