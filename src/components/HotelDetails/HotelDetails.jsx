import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import hotelData from '../../libs/database/hotelData';
import Header from '../Header/Header';
import './HotelDetail.css';

const HotelDetails = () => {
	const { placeName } = useParams();
	const [hotels, setHotel] = useState([]);
	useEffect(() => {
		setHotel(hotelData);
	}, []);

	return (
		<Container>
			<Header></Header>
			<h4 style={{ textAlign: 'center' }}>Hotel Details for {placeName}</h4>
			<Row>
				<Col className="hotel-style">
					{hotels.map((hotel) => (
						<Row key={hotel.id} className="hotel-card">
							<Col>
								<img className="room-img" src={hotel.img} alt="" />
							</Col>
							<Col>
								<h6>{hotel.name}</h6>
								<p>{hotel.detail}</p>
								<small>{hotel.avail}</small>
								<Row>
									<Col>
										<small>
											<img className="star-icon" src={hotel.icon} alt="" />
											{hotel.ratings}
										</small>
									</Col>
									<Col>
										<span>
											${hotel.price}/<small>night</small>
										</span>
									</Col>
								</Row>
							</Col>
						</Row>
					))}
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
};

export default HotelDetails;
