import React from 'react';
import { Col } from 'react-bootstrap';

const SingleTestmonial = ({info}) => {
    const {testmonial, timg, name, country} = info
    return (
            <Col md={4} className='m-0 p-0'>
                <div className="singleTestmonial">
                    <p>{testmonial}</p>
                    <div className="d-flex align-items-center mt-5">
                        <img src={timg} alt=""/>
                        <div>
                            <p className="m-0"><strong>{name}</strong></p>
                            <p className="m-0">{country}</p>
                        </div>
                    </div>
                </div>
            </Col>
    );
};

export default SingleTestmonial;