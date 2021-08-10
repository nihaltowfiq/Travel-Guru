import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Login from './components/UsersRole/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HotelDetails from './components/HotelDetails/HotelDetails';

export const UserContext = createContext();
export const UserData = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const [user, setUser] = useState({
		isSignedIn: false,
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		error: '',
		success: false,
	});

	return (
		<div className="App">
			<main>
				<UserData.Provider value={[user, setUser]}>
					<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
						<Router>
							<Switch>
								<Route path="/home">
									<Home></Home>
								</Route>
								<Route exact path="/">
									<Home></Home>
								</Route>
								<Route path="/booking/:placeName">
									<Booking></Booking>
								</Route>
								<Route path="/login">
									<Login></Login>
								</Route>
								<PrivateRoute path="/HotelDetails/:placeName">
									<HotelDetails></HotelDetails>
								</PrivateRoute>
								<Route path="*">
									<Header></Header>
									<NotFound></NotFound>
								</Route>
							</Switch>
						</Router>
					</UserContext.Provider>
				</UserData.Provider>
			</main>
		</div>
	);
}

export default App;
