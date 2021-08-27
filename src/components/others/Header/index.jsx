import { Button, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuthCtx } from 'store';
import { MainLink } from '../MainLink';
import './Header.css';

export const Header = ({ isDark, showSearch }) => {
	const history = useHistory();
	const { loggedInUser, onLogout } = useAuthCtx();
	const logo = isDark ? '/images/Logo/light-logo.png' : '/images/Logo/dark-logo.png';

	return (
		<Navbar className="navbar px-0">
			<Link to="/">
				<Navbar.Brand className="pr-5">
					<img src={logo} alt="" />
				</Navbar.Brand>
			</Link>

			{showSearch && <FormControl type="text" className="Search" placeholder="Search your Destination" />}

			<Nav className="ml-auto align-items-center mx-1">
				<MainLink to="/" isDark={isDark} className="Link_Style">
					Home
				</MainLink>
				{/* <NavLink to="" activeClassName="active" className="mr-3 text-white font-weight-bold">
					Features
				</NavLink>
				<NavLink to="" activeClassName="active" className="mr-3 text-white font-weight-bold">
					Pricing
				</NavLink> */}
			</Nav>
			{loggedInUser.isSignedIn ? (
				<Button variant="warning" onClick={onLogout}>
					Logout, {loggedInUser.name ? loggedInUser.name : loggedInUser.email}
				</Button>
			) : (
				<Button variant="warning" className="font-weight-bold" onClick={() => history.push('/login')}>
					Login
				</Button>
			)}
		</Navbar>
	);
};
