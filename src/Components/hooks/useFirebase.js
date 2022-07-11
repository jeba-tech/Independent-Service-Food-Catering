import { useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
      const [user, setUser] = useState({});



      const signInWithGoogle = () => {
            signInWithPopup(auth, googleProvider)
                  .then(result => {
                        const user = result.user;
                        setUser(user);
                        console.log(user);
                  })
                  .catch(error => {
                        console.error('error', error);

                  })
      }
      return { user, signInWithGoogle }

}

export default useFirebase;