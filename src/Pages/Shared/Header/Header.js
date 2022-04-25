import React from 'react';
import { Container, Nav, Navbar,NavDropdown  } from 'react-bootstrap';
import logo from '../../../logo.png'
import {Link} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import{signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut =()=>{
        signOut(auth);
    }
    return (
      <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link  href="home#experts">Experts</Nav.Link>
                          
                           
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                           {
                               user&& <>
                                 <Nav.Link as={Link}  to="/addservice">Add Service</Nav.Link>
                            <Nav.Link as={Link}  to="/manageservices">Mange</Nav.Link>
                               </>
                           }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;