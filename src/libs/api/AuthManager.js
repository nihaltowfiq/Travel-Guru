import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeAuthFramework = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
};

export const createUserAccount = (email, password) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((res) => {
			const { displayName, email } = res.user;
			const newUserInfo = { isSignedIn: true, name: displayName, email };
			const response = { success: true, data: newUserInfo, message: null };
			return response;
		})
		.catch((err) => {
			const response = { success: false, data: null, message: err.message };
			return response;
		});
};

export const signInUserAcount = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => {
			const { displayName, email } = res.user;
			const signedInUser = { isSignedIn: true, name: displayName, email };
			const response = { success: true, data: signedInUser, message: null };
			return response;
		})
		.catch((err) => {
			const response = { success: false, data: null, message: err.message };
			return response;
		});
};

export const handleGoogleSignIn = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			const { displayName, email } = result.user;
			const signedInUser = { isSignedIn: true, name: displayName, email };
			const response = { success: true, data: signedInUser, message: null };
			return response;
		})
		.catch((err) => {
			const response = { success: false, data: null, message: err.message };
			return response;
		});
};

export const handleFbSignIn = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			const { displayName, email } = result.user;
			const signedInUser = { isSignedIn: true, name: displayName, email };
			const response = { success: true, data: signedInUser, message: null };
			return response;
		})
		.catch((err) => {
			const response = { success: false, data: null, message: err.message };
			return response;
		});
};
