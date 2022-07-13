import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogo from '../../images/GoogleLogo.png'

const SocialLogin = () => {
      const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
      const navigate = useNavigate();
      let errorElement;
      if (error) {

            errorElement = <div>
                  <p className='text-danger'>Error: {error.message}</p>
            </div>

      }

      if (user) {
            navigate('/')
      }
      return (
            <div>
                  <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                        <p className='mt-2 px-2'>or</p>
                        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                  </div>
                  {errorElement}
                  <div>
                        <button
                              onClick={() => signInWithGoogle()}
                              className='btn btn-light d-block mx-auto'>
                              <img style={{ width: '30px' }} src={GoogleLogo} />
                              Google Sign In</button>
                  </div>
            </div>
      );
};

export default SocialLogin;