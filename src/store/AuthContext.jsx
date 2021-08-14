import { createContext, useContext, useEffect, useState } from 'react';

const initialValues = { loggedInUser: {}, onLogin: (payload) => {}, onLogout: () => {}, setLoggedInUser: (any) => {} };

const AuthCtx = createContext(initialValues);

export const useAuthCtx = () => {
	return useContext(AuthCtx);
};

const AuthCtxProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState({});

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (user) setLoggedInUser(JSON.parse(user));
	}, []);

	const onLogin = (payload) => {
		setLoggedInUser(payload);
		localStorage.setItem('user', JSON.stringify(payload));
	};
	const onLogout = () => {
		localStorage.removeItem('user');
		setLoggedInUser({});
	};

	return <AuthCtx.Provider value={{ loggedInUser, onLogin, onLogout, setLoggedInUser }}>{children}</AuthCtx.Provider>;
};

export default AuthCtxProvider;
