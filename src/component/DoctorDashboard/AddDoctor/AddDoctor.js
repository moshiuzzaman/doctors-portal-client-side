import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    const OnBlurHandler = (e) => {
        const allInfo = { ...info }
        allInfo[e.target.name] = e.target.value
        setInfo(allInfo)
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setFile(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        fetch('https://guarded-savannah-38779.herokuapp.com/addDoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert('Success')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Row>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10}>
                    <h4 className='section-name'>Add Doctors</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={OnBlurHandler} name='name' type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={OnBlurHandler} name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>File</Form.Label>
                            <Form.Control onChange={handleFileChange} type="file" placeholder="FIle" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

        </div>
    );
};

export default AddDoctor;