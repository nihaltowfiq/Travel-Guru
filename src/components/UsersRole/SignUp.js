import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fbIcon from '../../img/Icon/fb.png';
import googleIcon from '../../img/Icon/google.png';
import './SignUp.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const SignUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email};
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log(signedInUser);
          })
            .catch(error => {
                var errorMessage = error.message;
                console.log(errorMessage);
          });
    }
    return (
        <Container>
            <Row className="justify-content-md-center mt-3" >
                <Col md="auto">
                    <Form className='form-style'>
                        <h5>Create an acount</h5>
                        <Form.Group controlId="firstName">
                            <Form.Control size='sm' type="text" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Control size='sm' type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Control size='sm' type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Control size='sm' type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Control size='sm' type="password" placeholder="Confirm Password" />
                        </Form.Group>
                        <Button size='sm' style={{width:"100%"}} variant="warning" type="submit">
                            Create an acount
                        </Button>
                        <br/>
                        <p style={{textAlign: 'center', marginTop: "5px"}}><small>Already have an acount? </small> <Link to='/login' className="text-warning">Login</Link></p>
                    </Form>
                    <hr style={{backgroundColor:'gray', height:'1px'}} />
                    <div style={{textAlign:"center"}}>
                        <Button onClick={() => handleGoogleSignIn()} className='btn-style' variant="secondary"> <img style={{height:'25px'}} src={googleIcon} alt=""/> Sign in with Google</Button>
                        <br/>
                        <br/>
                        <Button className='btn-style' variant="secondary"><img style={{height:'25px'}} src={fbIcon} alt=""/> Sign in with Facebook</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;