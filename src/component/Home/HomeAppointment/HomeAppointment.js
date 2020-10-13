import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomeAppointment.css'


const HomeAppointment = () => {
    return (
        <div className='home-Appointment-Container'>
            <Container>
                <Row className='align-items-center home-Appointment'>
                    <Col md={5}>
                        <img className='' src={'https://i.ibb.co/7XPGWS7/doctor.png'} alt=""/>
                    </Col>
                    <Col md={7}>
                        <h4>APPOINTMENT</h4>
                        <h1 className='mb-4 mt-3'>Make an appointment <br/> Today</h1>
                        <p>It is a long established fact that a reader will be distractedby the readable content of a page when looking at its</p>
                        <Button  className='mt-4'>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeAppointment;