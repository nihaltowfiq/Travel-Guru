import { Switch, Route, Redirect } from 'react-router-dom';
import { MainLayout } from './components/others/Layouts/MainLayout';
import { Home, Booking, Auth, NotFound, HotelDetails } from './pages';
import { PrivateRoute } from './components/others';
import { useAuthCtx } from './store';

function App() {
	const { loggedInUser } = useAuthCtx();
	console.log({ loggedInUser });

	return (
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
	);
}

export default App;
