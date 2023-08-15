import React from 'react';
import './Contact.css';
import PageTitle from '../PageTitle/PageTitle';
// import { Helmet } from 'react-helmet-async';

const Contact = () => {
      const handleCreateUser = event => {
            event.preventDefault();

      }
      return (


            <div className='contactUs' id='contact'>
                  {/* <Helmet>
                        <title>Contact -Home Cooking</title>
                  </Helmet> */}
                  {/* <PageTitle title="Contact"></PageTitle> */}
                  <div>
                        <h2 className='contact-title'>Contact Us</h2>
                        <form onSubmit={handleCreateUser} autocomplete="off" >
                              <div >
                                    {/* <label htmlFor="text">Your Name</label> */}
                                    <p>Your Name</p>
                                    <p className='input-group'><input type="text" name="text" id="" required /></p>

                              </div>
                              <div >
                                    <p>Email</p>
                                    <p className='input-group'> <input type="email" name="email" id="" required /></p>
                                    {/* <label htmlFor="email">Email</label> */}

                              </div>

                              <div >
                                    <p>Write Massage</p>
                                    <p className='input-group'><textarea type="text" name="text" id="" required /></p>
                                    {/* <label htmlFor="text">Write Massage</label> */}

                              </div>
                              <input className='form-submit' type="submit" value="Send" />
                        </form>

                  </div>

            </div>
      );
};

export default Contact;