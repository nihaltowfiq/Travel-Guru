import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Auth as AuthComponent } from '../components/templates';
import {
	createUserAccount,
	handleFbSignIn,
	handleGoogleSignIn,
	initializeLoginFramework,
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
	const [newUser, setNewUser] = useState(false);
	const { loggedInUser, onLogin } = useAuthCtx();

	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/' } };

	initializeLoginFramework();

	const googleSignIn = () => {
		handleGoogleSignIn().then((res) => {
			onLogin(res);
			// history.replace(from);
		});
		// .catch((error) => {
		// 	setUser(error);
		// });
	};
	const facebookSignIn = () => {
		handleFbSignIn().then((res) => {
			onLogin(res);
			history.replace(from);
		});
		// .catch((error) => {
		// 	setUser(error);
		// });
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
			createUserAccount(email, password).then(({ email, name }) => {
				console.log(email, name);
				// setLoggedInUser(res);
				// history.replace(from);
			});
			// .catch((error) => {
			// 	setUser(error);
			// });
		}
		if (!newUser && email && password) {
			signInUserAcount(email, password).then((res) => {
				console.log(res);
				// setLoggedInUser(res);
				// history.replace(from);
			});
			// .catch((error) => {
			// 	setUser(error);
			// });
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
