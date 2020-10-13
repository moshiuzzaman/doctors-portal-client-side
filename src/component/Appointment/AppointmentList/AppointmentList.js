import React, { useState } from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AppointmentList = ({ list, date }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    const all = { ...list, date, ...data }
    fetch('https://guarded-savannah-38779.herokuapp.com/addappointment', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(all)
    })
      .then(res => res.json())
      .then(data => {
        data && alert('Your appointment Booking succesfully')
        setShow(false)
      })

  };
  return (
    <>
      <Col align="center" md={4}>
        <div className="appointmentList">
          <h4>{list.title}</h4>
          <h6>{list.time}</h6>
          <p> <small>10 Spaces available</small> </p>
          <Button onClick={handleShow} >Book Appointment</Button>
        </div>
      </Col>
      <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="popupForm">
            <h4 align="center">{list.title} </h4>
            <p className="mb-4" align="center">{date.toLocaleDateString('en-GB')}</p> 
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" placeholder="Name" name="Name" ref={register({ required: true, min: 3 })} />
              <input type="number" placeholder="number" name="number" ref={register({ required: true, min: 10 })} />
              <input type="email" placeholder="email" name="email" ref={register({ required: true })} />
              <input className="popup-form-halfInput-left" type="text" disabled defaultValue={list.time} name="Name" />
              <input className="popup-form-halfInput-right" type="text" disabled defaultValue={date} name="Name" />

              <input type="submit" />
            </form>
          </div>

        </Modal.Body>

      </Modal>
    </>
  );
};

export default AppointmentList;