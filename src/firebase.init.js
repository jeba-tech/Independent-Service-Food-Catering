// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCoTnSlDFA7A8dpjxKDAUzpyBnhFQXmCzs",
      authDomain: "independent-service-prov-6e8eb.firebaseapp.com",
      projectId: "independent-service-prov-6e8eb",
      storageBucket: "independent-service-prov-6e8eb.appspot.com",
      messagingSenderId: "603670268561",
      appId: "1:603670268561:web:4c9fd1853ff1b5b5cacd30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;