import { Redirect, Route } from 'react-router-dom';
import { useAuthCtx } from 'store/AuthContext';

export const PrivateRoute = ({ children, ...rest }) => {
	const { loggedInUser } = useAuthCtx();
	const user = localStorage.getItem('user');

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user || loggedInUser ? (
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
