import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAY7HVvX4ARWxYwlkvWfwNgSH_2WUjfwfs",
    authDomain: "mario-plan-f1bd1.firebaseapp.com",
    databaseURL: "https://mario-plan-f1bd1.firebaseio.com",
    projectId: "mario-plan-f1bd1",
    storageBucket: "mario-plan-f1bd1.appspot.com",
    messagingSenderId: "849684565748",
    appId: "1:849684565748:web:63a994b2a38feb0b8a98a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;