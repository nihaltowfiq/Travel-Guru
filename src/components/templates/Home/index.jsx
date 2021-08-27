import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Home.css';

export const Home = ({ data }) => {
	const [showPlace, setShowPlace] = useState(data[0]);
	const history = useHistory();
	const handleBooking = (placeName) => {
		history.push(`/booking/${placeName}`);
	};

	return (
		<Row className="mt-5 pt-5">
			<Col className="place_detail" lg={4}>
				<h2>{showPlace.name.toUpperCase()}</h2>
				<p>{showPlace.shortDescription}</p>
				<Button onClick={() => handleBooking(showPlace.name)} variant="warning">
					Booking &rarr;
				</Button>
			</Col>
			<Col lg={8}>
				<Row>
					{data.map((place) => (
						<Col sm={3} key={place.id} className="ml-5">
							<div
								onClick={() => setShowPlace(place)}
								className={`place_card ${showPlace.id === place.id ? 'activePlace' : ''}`}
							>
								<h3>{place.name}</h3>
								<img src={place.img} alt="" />
							</div>
						</Col>
					))}
				</Row>
			</Col>
		</Row>
	);
};
