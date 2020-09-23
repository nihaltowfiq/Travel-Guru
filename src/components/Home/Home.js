import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { destinationData } from '../../fakeData/destinationData';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const places = destinationData;
    // const [places, setPlaces] = useState([]);
    // useEffect = (() => {
    //     setPlaces(destinationData)
    // }, []);
    const [showPlace, setShowPlace] = useState(places[0]);
    // console.log(showPlace);
    const history = useHistory();
    const handleBooking = placeName => {
        history.push(`/booking/${placeName}`)
    };

    return (
        <Container fluid className="home-wrapper">
            <Header></Header>
            <Container className="home-info mt-5 pt-5">
                <Row className=''>
                    <Col>
                        <h2>{showPlace.name.toUpperCase()}</h2>
                        <p>{showPlace.shortDescription}</p>
                        <Button onClick={() => handleBooking(showPlace.name)} variant="warning">Booking →</Button>
                    </Col>
                    {
                        places.map( place => 
                            <Col key={place.id} className='ml-5'>
                                <div onClick={() => setShowPlace(place)} className="card-style" >
                                    <h3>{place.name}</h3>
                                    <img src={place.img} alt=""/>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Home;