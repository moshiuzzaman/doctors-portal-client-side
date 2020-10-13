import React from 'react';
import { Col } from 'react-bootstrap';

const SingleService = ({ info }) => {
    const { img, title, description } = info
    return (
        <Col md={4}>
            <div className="p-4">
                <img src={img} alt="" className="serviceImg w-25 " />
                <h5 className="serviceTitle mb-4 mt-4">{title}</h5>
                <p>{description}</p>
            </div>
        </Col>
    );
};

export default SingleService;