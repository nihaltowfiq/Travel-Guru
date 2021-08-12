import { createContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainLayout } from './components/others/Layouts/MainLayout';
import { Home, Booking, Auth, NotFound, HotelDetails } from './pages';
import { PrivateRoute } from './components/others';

export const UserContext = createContext();
export const UserData = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<MainLayout>
				<Switch>
					<Redirect from="/home" to="/" />
					<Route exact path="/" component={Home} />
					<Route path="/booking/:placeName" component={Booking} />
					<Route path="/login" component={Auth} />
					<PrivateRoute path="/hotel-details/:placeName">
						<HotelDetails />
					</PrivateRoute>
					<Route path="*" component={NotFound} />
				</Switch>
			</MainLayout>
		</UserContext.Provider>
	);
}

export default App;
