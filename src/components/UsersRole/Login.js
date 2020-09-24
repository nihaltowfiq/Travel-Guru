import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fbIcon from '../../img/Icon/fb.png';
import googleIcon from '../../img/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
                // console.log(signedInUser);
          })
            .catch(error => {
                var errorMessage = error.message;
                console.log(errorMessage);
          });
    }
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md="auto">
                    <Form className="form-style">
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

export default Login;