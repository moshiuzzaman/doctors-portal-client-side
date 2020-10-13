import React from 'react';
import { Col } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';

const SingleDoctor = ({info}) => {
    const {image, name}=info
    return (
        <Col md={4}>
            <div>
                <img className=" doctorImg" src={`data:image/png;base64,${image.img}`} alt=""/>
                <h5 className="mt-4"><strong>{name}</strong></h5>
                <p><small><FiPhoneCall color="#5fc7c7"/> +0123456789</small></p>
            </div>
        </Col>
    );
};

export default SingleDoctor;