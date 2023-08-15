
import React, { useState, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import SocialLogin from './SocialLogin';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
      ] = useSignInWithEmailAndPassword(auth);
      const emailRef = useRef();
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

      const handleEmailBlur = event => {
            setEmail(event.target.value);
      }

      const handlePasswordBlur = event => {
            setPassword(event.target.value);
      }

      if (loading || sending) {
            return <Loading></Loading>
      }


      if (user) {
            navigate(from, { replace: true });
      }
      if (user) {
            Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Login Successful',
                  showConfirmButton: false,
                  timer: 1500
            })
      }

      const handleUserSignIn = event => {
            event.preventDefault();
            signInWithEmailAndPassword(email, password);


      }
      const resetPassword = async () => {
            if (emailRef.current) {
                  const { value: email } = emailRef.current;

                  if (email) {
                        await sendPasswordResetEmail(email);
                        toast('Email Sent! Please Check');
                  }
                  else {
                        toast('Please enter your email address');
                  }
            }
      };


      return (
            <div className='form-container'>
                  <div>
                        <h2 className='form-title'>Login</h2>
                        <form onSubmit={handleUserSignIn} autocomplete="off">
                              <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required ref={emailRef} />
                              </div>
                              <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                              </div>
                              <p style={{ color: 'red' }}>{error?.message}</p>
                              {
                                    loading && <p>Loading...</p>
                              }
                              <input className='form-submit' type="submit" value="Login" />
                        </form>
                        <p>
                              New to Home Cooking? <Link className='form-link' to="/register">Create an account</Link>
                        </p>
                        <p>
                              Forget Password? <button className='form-link' onClick={resetPassword} style={{ border: 'none', background: 'transparent' }}>Reset Password</button>
                        </p>

                        <SocialLogin></SocialLogin>
                        <ToastContainer />
                  </div>
            </div>
      );
};

export default Login;