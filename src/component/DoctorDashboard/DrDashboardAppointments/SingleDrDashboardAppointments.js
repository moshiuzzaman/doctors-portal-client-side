import React from 'react';
import { Button } from 'react-bootstrap';

const SingleDrDashboardAppointments = ({info}) => {
    const {Name,time} =info
    return (
        <tr className="align-items-center">
        <td>{Name}</td>
        <td>{time}</td>
        <td><Button className="btnsm">Remove</Button></td>
    </tr>
    );
};

export default SingleDrDashboardAppointments;