import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    };
};

export const createUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch(error => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            return newUserInfo;
        });
};
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch(error => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            return newUserInfo;
        });
};











export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(result => {
            const { displayName, email } = result.user;
            const signedInUser = { isSignedIn: true, name: displayName, email };
            return signedInUser;
        })
        .catch(error => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
};
export const handleFbSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(result => {
            const { displayName, email } = result.user;
            const signedInUser = { isSignedIn: true, name: displayName, email };
            return signedInUser;
        })
        .catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

