import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import { FaFacebookF,FaTwitter } from 'react-icons/fa';
import { ImGooglePlus } from 'react-icons/im';


const Footer = () => {
    return (
        <div className='footer-section'>
            <Container >
                <Row>
                    <Col className='m-0 p-0' md={3}>
                        <ul>
                            <p className='section-name' ><strong>Useful link</strong></p>
                            <li>Emergency Dental Care</li>
                            <li>Yards</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Check Up</li>
                        </ul>
                    </Col>
                    <Col className='m-0 p-0' md={3}>
                        <ul>
                            <p className='section-name'><strong>Service</strong></p>
                            <li>Emergency Dental Care</li>
                            <li>Yards</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </Col>
                    <Col className='m-0 p-0' md={3}>
                        <ul>
                            <p className='section-name' ><strong>Oral Health</strong></p>
                            <li>Emergency Dental Care</li>
                            <li>Yards</li>
                            <li>Check Up</li>
                            <li>Treatment of Personal Diseases</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                            <li>Check Up</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <p className='section-name' ><strong>Our adress</strong></p>
                        <p>New York-101010 hedson <br/> Yeark</p>
                        <div className='mt-2'>
                            <FaFacebookF className='footerIcons'/>
                            <ImGooglePlus className='footerIcons'/>
                            <FaTwitter className='footerIcons'/>
                        </div>
                        <h5 className='mt-5'>Call Now</h5>
                        <Button> +25421554</Button>
                    </Col>
                </Row>
                <p className='mt-5' align="center"><small>Copyright 2020 , All rights reserved.</small></p>
            </Container>
        </div>
    );
};

export default Footer;