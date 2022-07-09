import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/Login">Login</Link>
                  <Link to="/about">About</Link>

                  <Link to="/Login">Services</Link>
            </div>
      );
};

export default Header;