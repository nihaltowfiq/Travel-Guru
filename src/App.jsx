import { createContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import Login from './components/UsersRole/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HotelDetails from './components/HotelDetails/HotelDetails';
import { MainLayout } from './components/others/Layouts/MainLayout';
import { Home } from './pages/Home';

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
		<UserData.Provider value={[user, setUser]}>
			<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
				<MainLayout>
					<Switch>
						<Redirect from="/home" to="/" />
						<Route exact path="/" component={Home} />
						<Route path="/booking/:placeName" component={Booking} />
						<Route path="/login" component={Login} />
						<PrivateRoute path="/HotelDetails/:placeName">
							<HotelDetails />
						</PrivateRoute>
						<Route path="*" component={NotFound} />
					</Switch>
				</MainLayout>
			</UserContext.Provider>
		</UserData.Provider>
	);
}

export default App;
