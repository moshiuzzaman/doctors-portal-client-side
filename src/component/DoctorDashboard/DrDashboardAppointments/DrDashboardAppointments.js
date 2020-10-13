import React, { useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import Calendar from 'react-calendar';
import SideBar from '../SideBar/SideBar';
import './DrDashboardAppointments.css'
import SingleDrDashboardAppointments from './SingleDrDashboardAppointments';


const DrDashboardAppointments = () => {
    const [appointmentsByDate, setAppointmentByDate] = useState([])
    const [date, setDate] = useState(new Date())
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const userEmail = newUser.email
    const handleDate = date => {
        setDate(date)
        fetch('https://guarded-savannah-38779.herokuapp.com/appointmentsByDate', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date,email :userEmail })

        })
            .then(res => res.json())
            .then(data => setAppointmentByDate(data))
    }

    return (
        <Row>
            <Col md={2}>
                <SideBar />
            </Col>
            <Col md={4}>
                <h4 className="section-name mt-3 mb-5">Appointments</h4>
                <Calendar
                    onChange={d => handleDate(d)}
                    value={new Date()}
                    minDate={new Date()}
                    maxDate={new Date(2020, 12, 15)}
                    minDetail={'year'}
                />
            </Col>
            <Col  md={6}>
                <div className="appointmentsByDate mr-5 mt-4">
                    <Row>
                        <Col className="section-name" md={4}>Appointments</Col>
                        <Col md={{ span: 4, offset: 4 }}>{date.toLocaleDateString('en-GB')}</Col>
                    </Row>
                    
                    {
                        appointmentsByDate.length > 0 ?
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Shedule</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        appointmentsByDate.map(a => <SingleDrDashboardAppointments info={a}/>)
                                    }
                                </tbody>
                            </Table> :
                            <p align="center" className="mt-5">No appointments were</p>
                    }
                </div>
            </Col>
        </Row>
    );
};

export default DrDashboardAppointments;