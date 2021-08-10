import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
};

export const createUserAccount = (email, password) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((res) => {
			const newUserInfo = res.user;
			newUserInfo.isSignedIn = true;
			newUserInfo.error = '';
			newUserInfo.success = true;
			return newUserInfo;
		})
		.catch((error) => {
			const errorMessage = error.message;
			const newUserInfo = {};
			newUserInfo.error = errorMessage;
			newUserInfo.success = false;
			return newUserInfo;
		});
};

export const signInUserAcount = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => {
			const newUserInfo = res.user;
			newUserInfo.isSignedIn = true;
			newUserInfo.error = '';
			return newUserInfo;
		})
		.catch((error) => {
			const errorMessage = error.message;
			const newUserInfo = {};
			newUserInfo.error = errorMessage;
			return newUserInfo;
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
			return signedInUser;
		})
		.catch((error) => {
			const errorMessage = error.message;
			const newUserInfo = {};
			newUserInfo.error = errorMessage;
			return newUserInfo;
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
			return signedInUser;
		})
		.catch((error) => {
			const errorMessage = error.message;
			const newUserInfo = {};
			newUserInfo.error = errorMessage;
			return newUserInfo;
		});
};

export const signOutUser = () => {
	return firebase
		.auth()
		.signOut()
		.then((res) => {
			const signedOutUser = {
				isSignedIn: false,
				name: '',
				email: '',
				password: '',
				confirmPassword: '',
				error: '',
				success: false,
			};
			return signedOutUser;
		})
		.catch((error) => {});
};
