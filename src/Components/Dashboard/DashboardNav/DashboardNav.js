import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../image/logo.png'
import { BsListUl } from 'react-icons/bs';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const DashboardNav = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div className="container my-5 ">
            <Navbar expand="lg">
            <Navbar.Brand > <img src={logo} className="img-fluid" alt=""/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link as={Link} to="/home" >Go to Home</Nav.Link>
                <Nav.Link as={Link} to={`/book/${id}`}> <BsListUl/> Book</Nav.Link>
                <Nav.Link as={Link} to="/bookingList" > <AiOutlineAppstoreAdd/> Booking List</Nav.Link>
                <Nav.Link as={Link} to="/review" > <AiOutlineShoppingCart/> Review</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
    );
};

export default DashboardNav;