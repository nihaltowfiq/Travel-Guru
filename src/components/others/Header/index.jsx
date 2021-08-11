import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext, UserData } from '../../../App';
import logo from '../../../assets/images/Logo/Logo2.png';
import { signOutUser } from '../../../libs/api/AuthManager';
import './Header.css';

export const Header = () => {
	const [user, setUser] = useContext(UserData);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const signOut = () => {
		signOutUser().then((res) => {
			setUser(res);
			setLoggedInUser(res);
		});
	};

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
				<NavLink to="/home" className="mr-3 text-white font-weight-bold">
					Home
				</NavLink>
				<NavLink to="" className="mr-3 text-white font-weight-bold">
					Features
				</NavLink>
				<NavLink to="" className="mr-3 text-white font-weight-bold">
					Pricing
				</NavLink>
			</Nav>
			{user.isSignedIn ? (
				<Button onClick={signOut} variant="warning">
					Logout, {user.email}
				</Button>
			) : (
				<Link to="/login">
					<Button variant="warning">Login</Button>
				</Link>
			)}
		</Navbar>
	);
};
