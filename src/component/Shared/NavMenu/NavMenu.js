import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css'

const NavMenu = () => {
    return (
        <Container>
            <Navbar className='navbar' expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to='/'  href="#home">Home</Link>
                        <Link to='/'>About</Link>
                        <Link to='/drDasboardAppointments'> Dashboard</Link>
                        <Link to='/'className={`${window.location.pathname ==='/appointment'? 'text-secondary':'text-white' }`} href="#link">Reviews</Link>
                        <Link to='/'className={`${window.location.pathname ==='/appointment'?'text-secondary':'text-white'}`} href="#link">Blog</Link>
                        <Link to='/doctorDashboard' className={`${window.location.pathname ==='/appointment'?'text-secondary':'text-white'}`} href="#link">Contact Us</Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavMenu;