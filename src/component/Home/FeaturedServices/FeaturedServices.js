import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './FeturedServices.css'
const FeaturedServices = () => {
    return (
        <Container >
            <Row className=" feturedService align-items-center mt-5">
                <Col md={5}>
                    <img className='w-100' src={'https://i.ibb.co/pQZK1Gr/featured-Sercice.jpg'} alt="" />
                </Col>
                <Col className='pl-5' md={7}>
                    <h1 >Exceptional Dental <br/> Care, on Your Terms</h1>
                    <p className='mt-5 mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <Button> Read More</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default FeaturedServices;