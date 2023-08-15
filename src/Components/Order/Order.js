import React, { useState } from 'react';
import './Order.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [address, setAddress] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');

      const [user] = useAuthState(auth)
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || '/';

      const handleNameBlur = event => {
            setName(event.target.value);
      }
      const handleEmailBlur = event => {
            setEmail(event.target.value);
      }

      const handlePhoneBlur = event => {
            setPhone(event.target.value);
      }
      const handleAddressBlur = event => {
            setAddress(event.target.value);
      }




      const handleUserSignIn = event => {
            event.preventDefault();

      }
      return (
            // <div className='order'>
            //       <h1 className='mt-5'>Please Order</h1>
            // </div>
            <div className='form-container'>
                  <div>
                        <h2 className='form-title'>Shipping Information</h2>
                        <form onSubmit={handleUserSignIn}>
                              <div className="input-group">
                                    <label htmlFor="name">Name</label>
                                    <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                              </div>
                              <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                              </div>
                              <div className="input-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                              </div>
                              <div className="input-group">
                                    <label htmlFor="address">Address</label>
                                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                              </div>

                              <input className='form-submit' type="submit" value="Place Order" />
                        </form>



                  </div>
            </div>
      );
};

export default Order;