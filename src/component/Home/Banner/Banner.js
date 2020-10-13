import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Container>
            <Row className="banner align-items-center">
                <Col className="pr-md-5" md={5}>
                    <h1 className="banner-headding">Your New smile starts here</h1>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, necessitatibus atque. Modi laborum voluptatem quo quisquam provident facilis blanditiis tenetur!</small></p>
                    <Link to='/appointment'><Button>Get Appointment</Button></Link>
                </Col>
                <Col md={7}>
                    <img className='w-100 banner-img' src={`https://i.ibb.co/tbM5xqJ/banner.jpg`} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;