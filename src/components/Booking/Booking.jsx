import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { destinationData } from '../../libs/database/destinationData';
import Header from '../Header/Header';

const Booking = () => {
	const { placeName } = useParams();
	const destination = destinationData.find((place) => place.name === placeName);
	const { name, longDescription } = destination;

	return (
		<Container className="home-wrapper">
			<Header></Header>
			<Row className="p-5">
				<Col className="p-5 mt-5 card-detail">
					<h2>{name.toUpperCase()}</h2>
					<p>{longDescription}</p>
				</Col>
				<Col className="p-5">
					<Form className="form-style" style={{ paddingBottom: '20px' }}>
						<Form.Group controlId="formGridAddress1">
							<Form.Label>Origin</Form.Label>
							<Form.Control name="location" required size="lg" type="text" placeholder="Your Location" />
						</Form.Group>

						<Form.Group controlId="formGridAddress2">
							<Form.Label>Destination</Form.Label>
							<Form.Control size="lg" readOnly value={placeName} />
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Label>From</Form.Label>
								<Form.Control name="date" required size="sm" type="date" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Label>To</Form.Label>
								<Form.Control name="date" required size="sm" type="date" />
							</Form.Group>
						</Form.Row>
						<Link to={`/HotelDetails/${placeName}`}>
							<Button style={{ width: '100%' }} variant="warning" type="submit">
								Start Booking
							</Button>
						</Link>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Booking;
