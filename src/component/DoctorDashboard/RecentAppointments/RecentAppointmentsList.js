import React from 'react';
import { Button } from 'react-bootstrap';

const RecentAppointmentsList = ({ info, sirial }) => {
    const { Name, date, time, number } = info
    
    return (
        <tr className="align-items-center">
            <td>{sirial}</td>
            <td>{date.slice(0,10)}</td>
            <td>{time}</td>
            <td>{Name}</td>
            <td>{number}</td>
            <td><Button className="btnsm">Remove</Button></td>
        </tr>
    );
};

export default RecentAppointmentsList;