import { PrivateRoute } from 'components/others';
import { Auth, Booking, Home, HotelDetails, NotFound } from 'pages';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
	return (
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
	);
}

export default App;
