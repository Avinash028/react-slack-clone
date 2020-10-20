// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAy_YVO__T5va1Ei1wGl5YuSQSsewZqPP8",
    authDomain: "slack-clone-cf058.firebaseapp.com",
    databaseURL: "https://slack-clone-cf058.firebaseio.com",
    projectId: "slack-clone-cf058",
    storageBucket: "slack-clone-cf058.appspot.com",
    messagingSenderId: "713563541733",
    appId: "1:713563541733:web:3ca02840e5923766e5040c",
    measurementId: "G-8Z0RZMVRHG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;