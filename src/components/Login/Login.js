import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fbIcon from '../../img/Icon/fb.png';
import googleIcon from '../../img/Icon/google.png';

const Login = () => {
    return (
        <Container>
            <Row className="justify-content-md-center mt-4">
                <Col md="auto">
                    <Form style={{border: '1px solid gray', padding: '20px', borderRadius: "10px", width:'400px'}}>
                        <h3>Create an acount.</h3>
                        <Form.Group controlId="email">
                            <Form.Control type="email" placeholder="Username or Email" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button style={{width:"100%"}} variant="warning" type="submit">
                            Login
                        </Button>
                        <br/>
                        <p style={{textAlign: 'center', marginTop:'5px'}}><small>Don't have an acount?</small> <Link to="/signUp" className="text-warning">Create an acount</Link></p>
                    </Form>
                    <hr style={{backgroundColor:'gray', height:'1px'}} />
                    <div style={{textAlign:"center"}}>
                        <Button className='btn-style' variant="secondary"> <img style={{height:'25px'}} src={googleIcon} alt=""/> Sign in with Google</Button>
                        <br/>
                        <br/>
                        <Button className='btn-style' variant="secondary"><img style={{height:'25px'}} src={fbIcon} alt=""/> Sign in with Facebook</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;