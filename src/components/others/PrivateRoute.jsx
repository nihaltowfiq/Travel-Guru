import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }) => {
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.isSignedIn ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};
