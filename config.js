import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDYbO-06PpBJdk49gWEGR0C0nZnY19XjVA",
    authDomain: "p-67-9d405.firebaseapp.com",
    projectId: "p-67-9d405",
    storageBucket: "p-67-9d405.appspot.com",
    messagingSenderId: "92576895474",
    appId: "1:92576895474:web:505244174048a0de69db6b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();