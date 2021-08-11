import { useParams } from 'react-router-dom';
import { Booking as BookingComponent } from '../components/templates';
import { destinationData } from '../libs/database/destinationData';

export const Booking = () => {
	const { placeName } = useParams();
	const destination = destinationData.find((place) => place.name === placeName);

	return <BookingComponent data={destination} place={placeName} />;
};
