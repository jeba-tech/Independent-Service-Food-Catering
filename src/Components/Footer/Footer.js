import React from 'react';
import './Footer.css';

const Footer = () => {
      const today = new Date();

      const year = today.getFullYear();

      return (
            <footer className='footer-style'>
                  <p><small>Copyright © {year} | Home Cooking</small></p>
            </footer>
      );
};

export default Footer;



