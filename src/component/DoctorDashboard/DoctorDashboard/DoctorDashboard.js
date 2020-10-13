import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import RecentAppointments from '../RecentAppointments/RecentAppointments';
import SideBar from '../SideBar/SideBar';
import'./DoctorDashboard.css'
import DashBoardCard from '../DashBoardCard/DashBoardCard'

const DoctorDashboard = () => {
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
                <h4 className='mt-3'>Dashboard</h4>
                <DashBoardCard appointments={appointments}/>
                <RecentAppointments appointments={appointments}/>
            </Col>
            
        </Row>
    );
};

export default DoctorDashboard;