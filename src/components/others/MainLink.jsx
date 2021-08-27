import { NavLink } from 'react-router-dom';

export const MainLink = ({ to, isDark, className, children }) => {
	return (
		<NavLink
			exact
			to={to}
			activeClassName="active"
			className={`${className} ${isDark ? 'text-white' : 'text-dark'}`}
		>
			{children}
		</NavLink>
	);
};
