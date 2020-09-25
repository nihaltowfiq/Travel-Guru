import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { destinationData } from '../../fakeData/destinationData';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const places = destinationData;
    const [showPlace, setShowPlace] = useState(places[0]);
    const history = useHistory();
    const handleBooking = placeName => {
        history.push(`/booking/${placeName}`)
    };

    return (
        <Container fluid>
            <Header></Header>
            <Container className="home-info mt-5 pt-5">
                <Row className=''>
                    <Col className="card-detail" lg={4}>
                        <h2>{showPlace.name.toUpperCase()}</h2>
                        <p>{showPlace.shortDescription}</p>
                        <Button onClick={() => handleBooking(showPlace.name)} variant="warning">Booking →</Button>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {
                                places.map(place =>
                                    <Col sm={3} key={place.id} className='ml-5'>
                                        <div onClick={() => setShowPlace(place)} className="card-style" >
                                            <h3>{place.name}</h3>
                                            <img src={place.img} alt="" />
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Home;