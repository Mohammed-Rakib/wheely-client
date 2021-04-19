import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png'
import { BsListUl } from 'react-icons/bs';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { SiGoogletagmanager } from 'react-icons/si';
const AdminDashboard = () => {
    return (
        <div className="container my-5 ">
            <Navbar expand="lg">
            <Navbar.Brand > <img src={logo} className="img-fluid" alt=""/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link as={Link} to="/home" >Go to Home</Nav.Link>
                <Nav.Link as={Link} to="/orderList" > <BsListUl/> Order list</Nav.Link>
                <Nav.Link as={Link} to="/addServices" > <AiOutlineAppstoreAdd/> Add Services</Nav.Link>
                <Nav.Link as={Link} to="/makeAdmin" > <AiOutlineUserAdd/> Make Admin</Nav.Link>
                <Nav.Link as={Link} to="/manageServices" > <SiGoogletagmanager/> Manage Services</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default AdminDashboard;