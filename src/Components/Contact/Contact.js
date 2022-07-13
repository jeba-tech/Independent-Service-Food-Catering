import React from 'react';
import './Contact.css';

const Contact = () => {
      const handleCreateUser = event => {
            event.preventDefault();

      }
      return (


            <div className='contactUs' id='contact'>
                  <div>
                        <h2 className='contact-title'>Contact Me</h2>
                        <form onSubmit={handleCreateUser} >
                              <div className="input-group">
                                    <label htmlFor="text">Your Name</label>
                                    <input type="text" name="text" id="" required />
                              </div>
                              <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="" required />
                              </div>

                              <div className="input-group">
                                    <label htmlFor="text">Write Massage</label>
                                    <input type="text" name="text" id="" required />
                              </div>
                              <input className='form-submit' type="submit" value="Send" />
                        </form>

                  </div>

            </div>
      );
};

export default Contact;