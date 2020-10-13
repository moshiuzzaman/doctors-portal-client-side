import './RecentAppointments.css'
import React from 'react';
import { Table } from 'react-bootstrap';
import RecentAppointmentsList from './RecentAppointmentsList';

const RecentAppointments = ({appointments}) => {
   
    return (
        <div className='recent-appointment  my-4 mr-5'>
            <h5 className="section-name">Recent Appointments</h5>
            <div className="recent-appointments-list align-items-center">
                {
                    appointments.length>0 ?
                    <Table responsive>
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            appointments.map((a,index)=><RecentAppointmentsList sirial={index+1} key={a._id} info={a}/>)
                        }
                    </tbody>
                </Table> :
                <p>No appointments were</p>
                }
        </div>
        </div >
    );
};

export default RecentAppointments;