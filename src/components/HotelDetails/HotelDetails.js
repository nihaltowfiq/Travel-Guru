import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hotelData from '../../fakeData/hotelData';
import './HotelDetail.css';

const HotelDetails = () => {
    const [hotels, setHotel] = useState([])
    useEffect(() => {
        setHotel(hotelData)
    }, []);
    console.log(hotels);

    return (
        <Container>
            <Row>
                <Col className="hotel-style">
                    {
                        hotels.map(hotel =>
                            <Row className="hotel-card">
                                <Col>
                                    <img className="room-img" src={hotel.img} alt="" />
                                </Col>
                                <Col>
                                    <h4>{hotel.name}</h4>
                                    <p>{hotel.detail}</p>
                                    <small>{hotel.avail}</small>
                                    <Row>
                                        <Col>
                                            <small><img className="star-icon" src={hotel.icon} alt=""/>{hotel.ratings}</small>
                                        </Col>
                                        <Col>
                                            <p>${hotel.price}/<small>night</small></p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )
                    }
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    );
};

export default HotelDetails;