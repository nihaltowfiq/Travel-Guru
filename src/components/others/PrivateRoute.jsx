import { Redirect, Route } from 'react-router-dom';
import { useAuthCtx } from '../../store';

export const PrivateRoute = ({ children, ...rest }) => {
	const { loggedInUser } = useAuthCtx();

	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedInUser.email ? (
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
