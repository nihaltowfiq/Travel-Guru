import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fbIcon from '../../img/Icon/fb.png';
import googleIcon from '../../img/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { signInWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework } from './AuthManager';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        inSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        success: false
    });
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            });
    };
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
            });
    };
    const handleBlur = e => {
        console.log(e.target.name, e.target.value);
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if(e.target.name === 'password' || e.target.name === 'confirmPassword'){
            const isPasswordValid = e.target.value.length > 6;
            const hasPasswordNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && hasPasswordNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };
    const handleLogin = (e) => {
        const {email, password} = user;
            if(email && password){
                firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    const newUserInfo = res.user;
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const errorMessage = error.message;
                    const newUserInfo = {};
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
                console.log('submitting')
            }
        
        // console.log(error);
        // if(email && password){
        //     signInWithEmailAndPassword(email, password)
        //         .then(res =>{
        //             setUser(res);
        //             setLoggedInUser(res);
        //             history.replace(from);
        //         })
        //         .catch(error => {
        //             setUser(error);
        //       });
        // }
        e.preventDefault();
    };
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">

                <Col md="auto">
                    <Form className="form-style">
                        <h3>Create an acount.</h3>
                        <Form.Group onBlur={handleBlur} controlId="email">
                            <Form.Control required type="email" placeholder="Username or Email" />
                        </Form.Group>
                        <Form.Group onBlur={handleBlur} controlId="password">
                            <Form.Control required type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={handleLogin} style={{width:"100%"}} variant="warning" type="submit">
                            Login
                        </Button>
                        <br/>
                        <p style={{textAlign: 'center', marginTop:'5px'}}><small>Don't have an acount?</small> <Link to="/signUp" className="text-warning">Create an acount</Link></p>
                    </Form>

                    <hr style={{backgroundColor:'gray', height:'1px'}} />
                    <div style={{textAlign:"center"}}>
                        <Button onClick={googleSignIn} className='btn-style' variant="secondary"> <img style={{height:'25px'}} src={googleIcon} alt=""/> Sign in with Google</Button>
                        <br/>
                        <br/>
                        <Button onClick={fbSignIn} className='btn-style' variant="secondary"><img style={{height:'25px'}} src={fbIcon} alt=""/> Sign in with Facebook</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;