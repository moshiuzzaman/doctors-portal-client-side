import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleBusiness from './SingleBusiness';
const Businessinfo =[
    {
        id: 1,
        title:'Opening Housr',
        description: 'Lorem, ipsum dolor sit amet consectetur ',
        icon: 'clock',
        background:'cyan'
    },
    {
        id: 2,
        title:'Visit Your location',
        description: 'Gulsan-10, dhaka, Bangladesh',
        icon: 'map',
        background:'black'
    },
    {
        id: 3,
        title:'Connect us now',
        description: '+01712456325',
        icon: 'phone',
        background:'cyan'
    }
    
]
const Business = () => {
    return (
        <Container className="Business">
            <Row>
                {
                    Businessinfo.map(bi=><SingleBusiness key={bi.id} info={bi}></SingleBusiness>)
                }
            </Row>
        </Container>
    );
};

export default Business;