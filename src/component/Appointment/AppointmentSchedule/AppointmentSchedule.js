import React from 'react';
import { Row } from 'react-bootstrap';
import DoctorS from '../../../Data/DoctorS'
import AppointmentList from '../AppointmentList/AppointmentList';

const AppointmentSchedule = ({ date }) => {
    return (
        <div className="mt-5" align="center">
            <h2 className="mb-4 mt-4">Available Appointments on {date.toLocaleDateString('en-GB')}</h2>
            <Row>
                {
                    DoctorS.map(ds => <AppointmentList date={date} list={ds}></AppointmentList>)
                }
            </Row>
        </div>
    );
};

export default AppointmentSchedule;