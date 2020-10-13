import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleDoctor from './SingleDoctor';
import './Doctor.css'


const Doctors = () => {
    const[doctors,setDoctors] =useState([])
    useEffect(()=>{
        fetch('https://guarded-savannah-38779.herokuapp.com/doctors')
        .then(response => response.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <Container className="my-5 py-5" align="center">
            <h4 className="section-name mt-5 mb-5"> Our doctor</h4>
            <Row>
                {
                    doctors.map(di => <SingleDoctor key={di._id} info={di} />)
                }
            </Row>
        </Container>
    );
};

export default Doctors;