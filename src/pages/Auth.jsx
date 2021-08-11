import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext, UserData } from '../App';
import { Auth as AuthComponent } from '../components/templates';
import {
	createUserAccount,
	handleFbSignIn,
	handleGoogleSignIn,
	initializeLoginFramework,
	signInUserAcount,
} from '../libs/api';
// import { handleFbSignIn, handleGoogleSignIn, initializeLoginFramework } from '../libs/api';

export const Auth = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [user, setUser] = useContext(UserData);
	const [newUser, setNewUser] = useState(false);

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
	const facebookSignIn = () => {
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
	const handleChange = (e) => {
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
		e.preventDefault();
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
	};

	return (
		<AuthComponent
			user={user}
			setUser={setUser}
			newUser={newUser}
			setNewUser={setNewUser}
			onGoole={googleSignIn}
			onFacebook={facebookSignIn}
			changeHandler={handleChange}
			submitHandler={handleSubmit}
		/>
	);
};
