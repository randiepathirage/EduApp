import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCoj_0SLA1u23gTO6xaw6nLSgI9rSk05SE",
    authDomain: "edu-app-3a108.firebaseapp.com",
    projectId: "edu-app-3a108",
    storageBucket: "edu-app-3a108.appspot.com",
    messagingSenderId: "780694861206",
    appId: "1:780694861206:web:c22fcf9f737eab3193d9b7"
}
let Firebase;

if (firebase.apps.length === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export { firebase };