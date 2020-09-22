import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <Container className="home-info">
            <Navbar className="navbar">
                <Navbar.Brand className="pr-5"><img style={{height:'40px'}} src={logo} alt=""/></Navbar.Brand>
                <Form inline>
                <FormControl type="text" placeholder="Search your Destination" className="mr-sm-2 header-search" />
                </Form>
                <Nav className="ml-auto mx-1 text-white">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button variant="warning">Log In</Button>
            </Navbar>
        </Container>
    );
};

export default Header;