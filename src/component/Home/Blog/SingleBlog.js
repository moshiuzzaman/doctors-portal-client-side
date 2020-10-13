import React from 'react';
import { Col } from 'react-bootstrap';

const SingleBlog = ({ info }) => {
    const { title, name, img, description, date } = info
    return (
        <Col md={4} className='m-0 p-0'>
            <div className="singleTestmonial">
                <div className="d-flex align-items-center mb-4">
                    <img src={img} alt="" />
                    <div>
                        <p className="m-0"><strong>{name}</strong></p>
                        <p className="m-0">{date}</p>
                    </div>
                </div>
                <h5 className="mb-3"><strong>{title}</strong></h5>
                <p className="m-0">{description}</p>

            </div>
        </Col>
    );
};

export default SingleBlog;