import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from './SingleService';
import './Services.css'

const servicesInfo = [
    {
        id: 1,
        title: 'Fluoride treatement',
        img: 'https://i.ibb.co/6bY7Z2Z/tooth.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore veniam, unde quod quae quas!'
    },
    {
        id: 2,
        title: 'Cavity Filling',
        img: 'https://i.ibb.co/vq16bsr/tooth1.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore veniam, unde quod quae quas!'
    },
    {
        id: 3,
        title: 'Teeth Whitening',
        img: 'https://i.ibb.co/tsNZb6k/dental.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore veniam, unde quod quae quas!'
    }

]
const Services = () => {
    return (
        <Container align="center" className="mt-5 pt-5">
            <h4 className="servicesh2 mb-3 mt-5">Our Services</h4>
            <h1 className="servicesh1">Services We Provide</h1>
            <Row className="mt-3 pt-4">
                {
                    servicesInfo.map(sv => <SingleService key={sv.id} info={sv}></SingleService>)
                }
            </Row>
        </Container>
    );
};

export default Services;