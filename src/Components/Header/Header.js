import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
      const [user] = useAuthState(auth);

      const handleSignOut = () => {
            signOut(auth);
      }
      return (


            <div>
                  <Navbar bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                              <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/services">Services</Nav.Link>
                                    {
                                          user ?
                                                <button onClick={handleSignOut}>Sign out</button>
                                                :
                                                <Nav.Link href="/login">Login</Nav.Link>
                                    }
                              </Nav>
                        </Container>
                  </Navbar>
            </div>

      );
};

export default Header;