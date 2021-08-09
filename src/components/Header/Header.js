import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext, UserData } from '../../App';
import logo from '../../img/Logo2.png';
import './Header.css';
import { signOutUser } from '../UsersRole/AuthManager';

const Header = () => {
	const [user, setUser] = useContext(UserData);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const signOut = () => {
		signOutUser().then((res) => {
			setUser(res);
			setLoggedInUser(res);
		});
	};
	return (
		<Container>
			<Navbar className="navbar">
				<Link to="/">
					<Navbar.Brand className="pr-5">
						<img src={logo} alt="" />
					</Navbar.Brand>
				</Link>
				<Form inline>
					<FormControl className="mr-sm-2 header-search" type="text" placeholder="Search your Destination" />
				</Form>
				<Nav className="ml-auto mx-1">
					<Nav.Link href="" className="text-white font-weight-bold">
						Home
					</Nav.Link>
					<Nav.Link className="text-white font-weight-bold" href="">
						Features
					</Nav.Link>
					<Nav.Link className="text-white font-weight-bold" href="">
						Pricing
					</Nav.Link>
				</Nav>
				{user.isSignedIn ? (
					<Button onClick={signOut} variant="warning" className="mx-2">
						Logout, {user.email}
					</Button>
				) : (
					<Link to="/login">
						<Button variant="warning" className="mx-2">
							Login
						</Button>
					</Link>
				)}
			</Navbar>
		</Container>
	);
};

export default Header;
