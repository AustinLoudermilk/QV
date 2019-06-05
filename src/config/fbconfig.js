import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpJ9P6vNllFtjKgkkxk9YDhduUe3LPsFk",
    authDomain: "qv-family-portal.firebaseapp.com",
    databaseURL: "https://qv-family-portal.firebaseio.com",
    projectId: "qv-family-portal",
    storageBucket: "qv-family-portal.appspot.com",
    messagingSenderId: "960076336898",
    appId: "1:960076336898:web:12ac7dee580b9d35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;