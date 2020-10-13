import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { firebaseConfig } from './Config';
import './LogIn.css'
var firebase = require("firebase/app");
require("firebase/auth");

// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
const LogIn = () => {
    const history =useHistory()
    const location =useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleLogin=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
                sessionStorage.setItem('user' , JSON.stringify(result.user))
                history.replace(from);
          }).catch(function(error) {
            alert(error.message) 
            
          });
    }
    return (
        <div className='login-page'>
            <Container>
                <Row className='align-items-center login-div '>
                    <Col md={5}>

                        <Button onClick={handleGoogleLogin}>SingIn with google</Button><br/>
                        <Link to='/'><Button  className='btnsm mt-5'>Back to home</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;