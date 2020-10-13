import React from 'react';
import { Col } from 'react-bootstrap';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
const SingleBusiness = ({ info }) => {
    const { icon, title, description,background } = info
    return (
        <Col   md={4}>
            <div className={`SingleBusiness bg-${background} align-items-center mb-3`}>
            <div className="businessinfo-icon">
                {
                    icon === 'clock' && <AiOutlineClockCircle />
                }
                {
                    icon === 'map' && <FaMapMarkerAlt />
                }
                {
                    icon === 'phone' && <FiPhoneCall />
                }

            </div>
            <div>
                <p className=" m-0"><strong>{title}</strong></p>
                <p className=" m-0"><small>{description}</small></p>
            </div>
            </div>
        </Col>
    );
};

export default SingleBusiness;