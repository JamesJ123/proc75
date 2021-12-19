import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD8bnTsd3fugeLIrsE8urXqz_2F2iWnRvs",
  authDomain: "e-library-3f1f2.firebaseapp.com",
  projectId: "e-library-3f1f2",
  storageBucket: "e-library-3f1f2.appspot.com",
  messagingSenderId: "1065012422729",
  appId: "1:1065012422729:web:c957c0cfcac3b9ea747798"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
