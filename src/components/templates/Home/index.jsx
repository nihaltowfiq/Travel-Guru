import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import './Home.css';

export const Home = ({ data }) => {
	const [showPlace, setShowPlace] = useState(data[0]);
	const history = useHistory();
	const handleBooking = (placeName) => {
		history.push(`/booking/${placeName}`);
	};

	return (
		<Row className="home-info mt-5 pt-5">
			<Col className="card-detail" lg={4}>
				<h2>{showPlace.name.toUpperCase()}</h2>
				<p>{showPlace.shortDescription}</p>
				<Button onClick={() => handleBooking(showPlace.name)} variant="warning">
					Booking →
				</Button>
			</Col>
			<Col lg={8}>
				<Row>
					{data.map((place) => (
						<Col sm={3} key={place.id} className="ml-5">
							<div
								onClick={() => setShowPlace(place)}
								className={`card-style ${showPlace.id === place.id ? 'active' : ''}`}
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
