import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './DashboardCard.css'
const DashBoardCard = ({ appointments }) => {
    return (
        <div>
            <Row className="pr-5 mt-5">
                <Col sm={3} md={3}>
                    <div className="singleCard bg-danger align-items-center">
                        <h1 className="cardCount">09</h1>
                        <div>
                            <p className='m-0'>peendin <br />Appointments</p>
                        </div>
                    </div>
                </Col>
                <Col sm={3} md={3}>
                    <div className="singleCard bg-info align-items-center">
                        <h1 className="cardCount">09</h1>
                        <div>
                            <p className='m-0'>Today,s <br />Appointments</p>
                        </div>
                    </div>
                </Col>

                <Col sm={3} md={3}>
                    <div className="singleCard  align-items-center">
                        <h1 className="cardCount">{appointments.length}</h1>
                        <div>
                            <p className='m-0'>Total <br />Appointments</p>
                        </div>
                    </div>
                </Col>
                <Col sm={3} md={3}>
                    <div className="singleCard bg-success align-items-center">
                        <h1 className="cardCount">09</h1>
                        <div>
                            <p className='m-0'>Total <br />Patients</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default DashBoardCard;