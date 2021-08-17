import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/images/Logo/Logo2.png';
import { useAuthCtx } from 'store';
import './Header.css';

export const Header = () => {
	const { loggedInUser, onLogout } = useAuthCtx();

	return (
		<Navbar className="navbar px-0">
			<Link to="/">
				<Navbar.Brand className="pr-5">
					<img src={logo} alt="" />
				</Navbar.Brand>
			</Link>
			<Form inline>
				<FormControl className="mr-sm-2 header-search" type="text" placeholder="Search your Destination" />
			</Form>
			<Nav className="ml-auto align-items-center mx-1">
				<NavLink exact to="/" activeClassName="active" className="mr-3 text-white font-weight-bold">
					Home
				</NavLink>
				{/* <NavLink to="" activeClassName="active" className="mr-3 text-white font-weight-bold">
					Features
				</NavLink>
				<NavLink to="" activeClassName="active" className="mr-3 text-white font-weight-bold">
					Pricing
				</NavLink> */}
			</Nav>
			{loggedInUser.isSignedIn ? (
				<Button onClick={onLogout} variant="warning">
					Logout, {loggedInUser.name ? loggedInUser.name : loggedInUser.email}
				</Button>
			) : (
				<Link to="/login">
					<Button variant="warning">Login</Button>
				</Link>
			)}
		</Navbar>
	);
};
