import { useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { Auth as AuthComponent } from '../components/templates';
import {
	createUserAccount,
	handleFbSignIn,
	handleGoogleSignIn,
	initializeAuthFramework,
	signInUserAcount,
} from '../libs/api';
import { useAuthCtx } from '../store';

const initialUserValue = {
	isSignedIn: false,
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const Auth = () => {
	const [values, setValues] = useState(initialUserValue);
	const [errMsg, setErrMsg] = useState(null);
	const [newUser, setNewUser] = useState(false);
	const { onLogin } = useAuthCtx();

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	initializeAuthFramework();

	const redirectPath = (data) => {
		setErrMsg(null);
		onLogin(data);
		history.replace(from);
	};
	const showMessage = (message) => {
		setErrMsg(message);
		setTimeout(() => {
			setErrMsg(null);
		}, 5000);
	};

	const googleSignIn = () => {
		handleGoogleSignIn().then(({ success, data, message }) => {
			if (success) redirectPath(data);
			showMessage(message);
		});
	};
	const facebookSignIn = () => {
		handleFbSignIn().then(({ success, data, message }) => {
			if (success) redirectPath(data);
			showMessage(message);
		});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		let isFieldValid = true;
		if (name === 'email') {
			isFieldValid = /\S+@\S+\.\S+/.test(value);
		}
		if (name === 'password' || name === 'confirmPassword') {
			const isPasswordValid = value.length > 6;
			const hasPasswordNumber = /\d{1}/.test(e.target.value);
			isFieldValid = isPasswordValid && hasPasswordNumber;
		}
		if (isFieldValid) setValues((prevState) => ({ ...prevState, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, confirmPassword } = values;
		if (newUser && name && email && password && confirmPassword && password === confirmPassword) {
			createUserAccount(email, password).then(({ success, data, message }) => {
				if (success) redirectPath(data);
				showMessage(message);
			});
		}
		if (!newUser && email && password) {
			signInUserAcount(email, password).then(({ success, data, message }) => {
				if (success) redirectPath(data);
				showMessage(message);
			});
		}
	};

	return (
		<Row className="justify-content-center mt-3">
			<Col>
				{errMsg && (
					<p className="text-danger text-center">
						<Badge variant="danger">{errMsg}</Badge>
					</p>
				)}
				<AuthComponent
					newUser={newUser}
					setNewUser={setNewUser}
					onGoogle={googleSignIn}
					onFacebook={facebookSignIn}
					changeHandler={handleChange}
					submitHandler={handleSubmit}
				/>
			</Col>
		</Row>
	);
};
