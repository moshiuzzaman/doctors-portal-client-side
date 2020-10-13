import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import'./AllPatients.css'
import RecentAppointments from '../../DoctorDashboard/RecentAppointments/RecentAppointments'

const AllPatients = () => {
    const [appointments, setAppointments] =useState([])
    useEffect(()=>{
        fetch('https://guarded-savannah-38779.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => {
              setAppointments(data)
            })
    },[])
    return (
        <Row>
            <Col md={2}>
                <SideBar/>
            </Col>
            <Col md={10}>
                <h4 className='mt-3'>All Patients</h4>
                <RecentAppointments appointments={appointments}/>
            </Col>
            
        </Row>
    );
};

export default AllPatients;