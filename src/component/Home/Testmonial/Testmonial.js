import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleTestmonial from './SingleTestmonial';
import './Testmonial.css'
const TestmonialInfo = [
    {
        id: 1,
        testmonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Winson Herry',
        country: 'California',
        timg: 'https://i.ibb.co/dJgY5jm/clint.png'
    },
    {
        id: 2,
        testmonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Winson Herry',
        country: 'California',
        timg: 'https://i.ibb.co/Y8hVBK9/clint1.png'
       
    },
    {
        id: 3,
        testmonial: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Winson Herry',
        country: 'California',
        timg:  'https://i.ibb.co/7vxfRGQ/clinr2.png'
    }

]


const Testmonial = () => {
    return (
        <div className=' pt-5 mt-5'>
            <Container className='testmonial-section '>
                <h4 className="section-name">Testmonial</h4>
                <h1 className='mt-3 mb-4 pb-3 section-title'>What's Our Patients <br/> Says</h1>
                <Row>
                    {
                        TestmonialInfo.map(tm => <SingleTestmonial  key={tm.id} info={tm}/>)
                    } 
                </Row>
            </Container>
        </div>
    );
};

export default Testmonial;