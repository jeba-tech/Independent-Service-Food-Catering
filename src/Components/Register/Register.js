import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';
import Swal from 'sweetalert2';

const Register = () => {


      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [error, setError] = useState('');
      const [agree, setAgree] = useState(false);
      const navigate = useNavigate();

      const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
      const handleEmailBlur = event => {
            setEmail(event.target.value);
      }


      const handlePasswordBlur = event => {
            setPassword(event.target.value);
      }

      const handleConfirmPasswordBlur = event => {
            setConfirmPassword(event.target.value);
      }
      if (user) {
            navigate('/login');
      }
      if (user) {
            Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Registration Successful',
                  showConfirmButton: false,
                  timer: 1500
            })
      }
      const handleCreateUser = event => {
            event.preventDefault();
            if (password !== confirmPassword) {
                  setError('Your two passwords did not match');
                  return;
            }
            if (password.length < 6) {
                  setError('Password must be 6 characters or longer');
                  return;
            }
            if (agree) {
                  createUserWithEmailAndPassword(email, password);
            }
      }
      return (
            <div className='form-container'>
                  <div>
                        <h2 className='form-title'>Registration</h2>
                        <form onSubmit={handleCreateUser} autocomplete="off">
                              <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                              </div>
                              <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                              </div>
                              <div className="input-group">
                                    <label htmlFor="Confirm-password">Confirm Password</label>
                                    <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm-password" id="" required />
                              </div>
                              <p style={{ color: 'red' }}>{error}</p>

                              <p className={agree ? 'text-black' : 'text-danger'}>
                                    <input onClick={() => setAgree(!agree)} className='mx-auto' type="checkbox" name="terms" id="terms" />  Accept Home Cooking terms and conditions
                              </p>
                              <input disabled={!agree} className='form-submit' type="submit" value="Register" />
                        </form>
                        <p>
                              Already have an account? <Link className='form-link' to="/login">Login</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                  </div>
            </div>
      );
};

export default Register;


