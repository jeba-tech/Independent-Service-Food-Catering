import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
      const [user] = useAuthState(auth);

      const handleSignOut = () => {
            signOut(auth);
      }
      return (


            <div>


                  <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                        <Container>
                              <Navbar.Brand as={Link} to="/">
                                    <img height={40} width={55} src={logo} />
                              </Navbar.Brand>
                              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                              <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">

                                          {/* <Nav.Link href="#about">About</Nav.Link> */}
                                          <Nav.Link href="#services">Services</Nav.Link>
                                          {/* <Nav.Link as={Link} to="services">Services</Nav.Link> */}
                                          {/* <Nav.Link href="/blogs">Blogs</Nav.Link> */}
                                          <Nav.Link href="#contact" >Contact Us</Nav.Link>
                                          {/* <Nav.Link as={Link} to="contact" href="">Contact Us</Nav.Link> */}

                                    </Nav>
                                    <Nav>
                                          {
                                                user ?
                                                      <button onClick={handleSignOut}>Sign out</button>
                                                      :
                                                      <Nav.Link href="/login">Login</Nav.Link>
                                          }
                                    </Nav>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>
            </div>

      );
};

export default Header;