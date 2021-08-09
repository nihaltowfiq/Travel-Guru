import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import fbIcon from '../../img/Icon/fb.png';
import googleIcon from '../../img/Icon/google.png';
import './Login.css';
import { UserContext, UserData } from '../../App';
import {
	signInUserAcount,
	createUserAccount,
	handleFbSignIn,
	handleGoogleSignIn,
	initializeLoginFramework,
} from './AuthManager';
import Header from '../Header/Header';

const SignUp = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [user, setUser] = useContext(UserData);
	const [newUser, setNewUser] = useState(true);

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	initializeLoginFramework();

	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((res) => {
				setUser(res);
				setLoggedInUser(res);
				history.replace(from);
			})
			.catch((error) => {
				setUser(error);
			});
	};
	const fbSignIn = () => {
		handleFbSignIn()
			.then((res) => {
				setUser(res);
				setLoggedInUser(res);
				history.replace(from);
			})
			.catch((error) => {
				setUser(error);
			});
	};
	const handleBlur = (e) => {
		let isFieldValid = true;
		if (e.target.name === 'email') {
			isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
		}
		if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
			const isPasswordValid = e.target.value.length > 6;
			const hasPasswordNumber = /\d{1}/.test(e.target.value);
			isFieldValid = isPasswordValid && hasPasswordNumber;
		}
		if (isFieldValid) {
			const newUserInfo = { ...user };
			newUserInfo[e.target.name] = e.target.value;
			setUser(newUserInfo);
		}
	};
	const handleSubmit = (e) => {
		const { name, email, password, confirmPassword } = user;
		if (newUser && name && email && password && confirmPassword && password === confirmPassword) {
			createUserAccount(email, password)
				.then((res) => {
					setUser(res);
					setLoggedInUser(res);
					history.replace(from);
				})
				.catch((error) => {
					setUser(error);
				});
		}
		if (!newUser && email && password) {
			signInUserAcount(email, password)
				.then((res) => {
					setUser(res);
					setLoggedInUser(res);
					history.replace(from);
				})
				.catch((error) => {
					setUser(error);
				});
		}
		e.preventDefault();
	};
	return (
		<Container>
			<Header></Header>
			<Row className="justify-content-md-center mt-3">
				<Col md="auto">
					<Form className="form-style">
						{newUser ? <h5>Create an acount</h5> : <h5>Login</h5>}
						{newUser && (
							<Form.Group onBlur={handleBlur} controlId="name">
								<Form.Control required name="name" type="text" placeholder="Your Name" />
							</Form.Group>
						)}
						<Form.Group onBlur={handleBlur} controlId="email">
							<Form.Control required name="email" type="email" placeholder="Email" />
						</Form.Group>
						<Form.Group onBlur={handleBlur} controlId="password">
							<Form.Control required name="password" type="password" placeholder="Password" />
						</Form.Group>
						{newUser && (
							<Form.Group onBlur={handleBlur} controlId="confirmPassword">
								<Form.Control
									required
									name="confirmPassword"
									type="password"
									placeholder="Confirm Password"
								/>
							</Form.Group>
						)}
						<Button onClick={handleSubmit} style={{ width: '100%' }} variant="warning" type="submit">
							{newUser ? <span>Create an acount</span> : <span>Login</span>}
						</Button>
						<br />
						<p style={{ textAlign: 'center', marginTop: '5px' }}>
							{newUser ? <small>Already have an acount? </small> : <small>Don't have an acount? </small>}
							<Link
								onClick={() => {
									setNewUser(!newUser);
									setUser({ error: '' });
								}}
								className="text-warning"
							>
								{!newUser ? <span>Create an acount</span> : <span>Login</span>}
							</Link>
						</p>
						<p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>
						{user.success && (
							<p style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
								User Created Successfully
							</p>
						)}
					</Form>

					<hr style={{ backgroundColor: 'gray', height: '1px' }} />
					<div style={{ textAlign: 'center' }}>
						<Button onClick={googleSignIn} className="btn-style" variant="secondary">
							{' '}
							<img style={{ height: '25px' }} src={googleIcon} alt="" /> Sign in with Google
						</Button>
						<br />
						<br />
						<Button onClick={fbSignIn} className="btn-style" variant="secondary">
							<img style={{ height: '25px' }} src={fbIcon} alt="" /> Sign in with Facebook
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SignUp;
