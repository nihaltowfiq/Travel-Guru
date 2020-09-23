import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { destinationData } from '../../fakeData/destinationData';
import Header from '../Header/Header';

const Booking = () => {
    const {placeName} = useParams();
    const destination = destinationData.find(place => place.name === placeName)
    const {name, longDescription} = destination;
    const history = useHistory();
    const handleStartBooking = () => {
        history.push('/signUp')
    }
    return (
        <Container className="home-wrapper">
            <Header></Header>
            <Row className="p-5">
                <Col className="p-5 mt-5">
                    <h1>{name.toUpperCase()}</h1>
                    <h6>{longDescription}</h6>
                </Col>
                <Col className="p-5">
                <Form style={{border: '1px solid gray', padding: '20px', borderRadius: "10px"}}>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control placeholder="dhaka" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control placeholder={placeName} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>From</Form.Label>
                            <Form.Control type="date" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={() => handleStartBooking()} style={{width:"100%"}} variant="warning" type="submit">
                        Start Booking
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;