import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../../img/Logo2.png';
import './Header.css';

const Header = () => {
    const history = useHistory();
    const handleLogin = () => {
        history.push('/login')
    };
    return (
        <Container >
            <Navbar className="navbar">
                <Navbar.Brand href="/" className="pr-5"><img src={logo} alt=""/></Navbar.Brand>
                <Form inline>
                    <FormControl className="mr-sm-2 header-search text-white" type="text" placeholder="Search your Destination"/>
                </Form>
                <Nav className="ml-auto mx-1">
                    <Nav.Link href="/home" className="text-white font-weight-bold">Home</Nav.Link>
                    <Nav.Link className="text-white font-weight-bold" href="#features">Features</Nav.Link>
                    <Nav.Link className="text-white font-weight-bold" href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button onClick={() => handleLogin()} variant="warning">Log In</Button>
            </Navbar>
        </Container>
    );
};

export default Header;