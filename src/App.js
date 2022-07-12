import './App.css';

//import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

//const auth = getAuth(app);


function App() {


  // const [validated, setValidated] = useState(false);
  // const [registered, setRegistered] = useState(false);
  // const [error, setError] = useState('');
  // const [email, setEmail] = useState('');
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [user, setUser] = useState({});
  // //const provider = new GoogleAuthProvider();

  // const handleNameBlur = event => {
  //   setName(event.target.value);
  // }
  // const handleSignOut = event => {
  //   // signOut(auth)
  //   //   .then(() => {
  //   //     setUser({});
  //   //   })
  //   //   .catch(error => {
  //   //     setUser({});

  //   //   })

  // }
  // const handleEmailBlur = event => {
  //   setEmail(event.target.value);
  // }

  // const handlePasswordBlur = event => {
  //   setPassword(event.target.value);
  // }
  // // const handleGoogleSignIn = event => {
  // //   signInWithPopup(auth, provider)
  // //     .then(result => {
  // //       const user = result.user;
  // //       setUser(user);
  // //       console.log(user);
  // //     })
  // //     .catch(error => {
  // //       console.error('error', error);

  // //     })

  // }

  // const handleRegisteredChange = event => {
  //   setRegistered(event.target.checked);
  // }
  // const handleFormSubmit = event => {

  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //   }

  //   if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
  //     setError('Password should contain at least one upper case,one lower case.one digit,one special character,minimum eight in length');
  //     return;
  //   }

  //   setValidated(true);
  //   setError('');

  //   if (registered) {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then(result => {
  //         const user = result.user;
  //         console.log(user);

  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setError(error.message);
  //       })
  //   }
  //   else {

  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then(result => {
  //         const user = result.user;
  //         console.log(user);
  //         setEmail('');
  //         setPassword('');
  //         verifyEmail();
  //         setUserName();
  //       })
  //       .catch(error => {
  //         console.error(error);
  //         setError(error.message);
  //       })
  //   }


  //   event.preventDefault();
  // }
  // const handlePasswordReset = () => {
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       console.log('email sent ');
  //     })
  // }

  // const setUserName = () => {
  //   updateProfile(auth.currentUser, {

  //     displayName: name
  //   })
  //     .then(() => {
  //       console.log('updating name');
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //     })
  // }
  // const verifyEmail = () => {
  //   sendEmailVerification(auth.currentUser)
  //     .then(() => {
  //       console.log('email verification sent ');
  //     })

  // }
  return (
    <div>
      <Header></Header>
      <Banner></Banner>

      <Routes>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/services" element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>

        }></Route>
        <Route path="/about" element={<About></About>}></Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
