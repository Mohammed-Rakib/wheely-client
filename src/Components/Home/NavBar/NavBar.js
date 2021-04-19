import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../image/logo.png'
import './NavBar.css'
const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container py-4">
            <Navbar expand="lg">
            <Navbar.Brand > <img src={logo} className="img-fluid" alt=""/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                <Nav.Link as={Link} to="/about" >About Us</Nav.Link>
                <Nav.Link as={Link} to="/services" >Services</Nav.Link>
                <Nav.Link as={Link} to="/dashboard" >Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/admin" >Admin</Nav.Link>
                <Nav.Link as={Link} to="/review" >Contact</Nav.Link>
                {
                    loggedInUser.email ? <Nav.Link >{loggedInUser.name}</Nav.Link> : 
                    <Nav.Link as={Link} className="btn btn-outline-success text-danger" to="/login" >Login</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;