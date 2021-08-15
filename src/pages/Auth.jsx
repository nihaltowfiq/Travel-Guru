import { useState } from 'react';
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

	console.log({ errMsg });

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };
	initializeAuthFramework();

	const googleSignIn = () => {
		handleGoogleSignIn()
			.then((res) => {
				setErrMsg(null);
				onLogin(res);
				history.replace(from);
			})
			.catch((error) => setErrMsg(error));
	};
	const facebookSignIn = () => {
		handleFbSignIn()
			.then((res) => {
				setErrMsg(null);
				onLogin(res);
				history.replace(from);
			})
			.catch((error) => setErrMsg(error));
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
			createUserAccount(email, password)
				.then((res) => {
					setErrMsg(null);
					onLogin(res);
					history.replace(from);
				})
				.catch((error) => setErrMsg(error));
		}
		if (!newUser && email && password) {
			signInUserAcount(email, password)
				.then((res) => {
					setErrMsg(null);
					console.log(res);
					// if (isSignedIn) {
					// 	onLogin({ isSignedIn, email, name });
					// 	history.replace(from);
					// }
				})
				.catch((error) => setErrMsg(error));
		}
	};

	return (
		<AuthComponent
			newUser={newUser}
			setNewUser={setNewUser}
			onGoogle={googleSignIn}
			onFacebook={facebookSignIn}
			changeHandler={handleChange}
			submitHandler={handleSubmit}
		/>
	);
};
