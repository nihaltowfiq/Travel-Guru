import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <Container fluid className="home-wrapper">
            <Header></Header>
            <Container className="home-info mt-5 pt-5">
                <Row className='ml-2'>
                    <Col>
                        <h1>SUNDARBAN</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, exercitationem dolorem vel dignissimos quibusdam soluta facere? Illo dolores molestiae dicta?</p>
                        <Button variant="warning">Booking   →</Button>
                    </Col>
                    <Col className='ml-5'>
                        <div className="card-style card-img1" active>
                            <h2>Sundarban</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="card-style card-img2">
                            <h2>Sajek</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className="card-style card-img3">
                            <h2>Sreemongol</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Home;