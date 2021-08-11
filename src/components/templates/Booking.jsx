import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';

export const Booking = ({ place, data }) => {
	const { name, longDescription } = data;

	return (
		<div className="home-wrapper">
			<Row className="p-5">
				<Col className="p-5 mt-5 card-detail">
					<h2>{name.toUpperCase()}</h2>
					<p>{longDescription}</p>
				</Col>
				<Col className="p-5">
					<Form className="form-style" style={{ paddingBottom: '20px' }}>
						<Form.Group>
							<Form.Label>Origin</Form.Label>
							<Form.Control name="location" required size="lg" type="text" placeholder="Your Location" />
						</Form.Group>

						<Form.Group>
							<Form.Label>Destination</Form.Label>
							<Form.Control size="lg" readOnly value={place} />
						</Form.Group>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>From</Form.Label>
								<Form.Control name="date" required size="sm" type="date" />
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>To</Form.Label>
								<Form.Control name="date" required size="sm" type="date" />
							</Form.Group>
						</Form.Row>
						<Link to={`/hotel-details/${place}`}>
							<Button style={{ width: '100%' }} variant="warning" type="submit">
								Start Booking
							</Button>
						</Link>
					</Form>
				</Col>
			</Row>
		</div>
	);
};
