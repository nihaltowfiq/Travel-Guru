import { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { hotelData } from 'libs/database';
import './HotelDetail.css';

export const HotelDetails = () => {
	const { placeName } = useParams();
	const [hotels, setHotel] = useState([]);
	useEffect(() => {
		setHotel(hotelData);
	}, []);

	return (
		<Fragment>
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
		</Fragment>
	);
};
