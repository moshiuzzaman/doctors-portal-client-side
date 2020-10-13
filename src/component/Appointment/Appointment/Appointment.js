import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppointmentSchedule from '../AppointmentSchedule/AppointmentSchedule';
import "./Appointment.css"
import NavMenu from '../../Shared/NavMenu/NavMenu';
import Calendar from 'react-calendar';
import Footer from '../../Shared/Footer/Footer';


const Appointment = () => {
    const [date, setDate] = useState(new Date())

    const handleDate = d => {
        setDate(d)
    }

    return (
        <>
            <div className="appointment">
                <Container>
                    <NavMenu />
                    <h1 className="mt-5 mb-4">Appointment</h1>
                    <Row>
                        <Col md={5}>
                            <Calendar
                                onChange={d =>handleDate(d)}
                                value={new Date()}
                                minDate={new Date()}
                                maxDate={new Date(2020, 12, 15)}
                                minDetail={'year'}
                            />
                        </Col>
                        <Col md={7}>
                            <img className="w-100" src={`https://i.ibb.co/tbM5xqJ/banner.jpg`} alt="" />

                        </Col>
                    </Row>
                    <AppointmentSchedule date={date} />
                    <Footer/>
                </Container>
            </div>
        </>
    );
};

export default Appointment;