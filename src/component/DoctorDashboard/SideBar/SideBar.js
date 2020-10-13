import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { AiFillCalendar, AiFillSetting } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { HiDocumentDuplicate } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { firebaseConfig } from '../../LogIn/Config';
var firebase = require("firebase/app");
require("firebase/auth");


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

const DashboardMenu = () => {
    const [isDoctor, setIsDoctor] = useState(false)
    const newUser = JSON.parse(sessionStorage.getItem('user'))
    const userEmail = newUser.email
    useEffect(() => {
        fetch(`https://guarded-savannah-38779.herokuapp.com/user?email=${userEmail}`)
            .then(response => response.json())
            .then(data => setIsDoctor(data))
    }, [])

   const  logOutHandle=()=>{
    firebase.auth().signOut().then(function() {
        sessionStorage.clear()
      }).catch(function(error) {
        // An error happened.
      });
   }
    return (
        <div className="dashboard-menu">
            {
                isDoctor && <Link to='/doctorDashboard'><button><MdDashboard className="dashboard-menu-icon" />Dashboard</button></Link>
            }


            <Link to='/drDasboardAppointments'><button><AiFillCalendar className="dashboard-menu-icon" />Appointments</button></Link>
            {
                isDoctor && <>

                    <Link to='/drDasboardPatients'><button><BsPeopleFill className="dashboard-menu-icon" />Patients</button></Link>
                    <Link to='/drDasboardPrescriptions'><button><HiDocumentDuplicate className="dashboard-menu-icon" />Prescriptions</button></Link>
                    <Link to='/addDoctors'><button><AiFillSetting className="dashboard-menu-icon" />Add Doctors</button></Link>
                    <Link to='/drDasboardSettings'><button><AiFillSetting className="dashboard-menu-icon" />Settings</button></Link>
                   
                </>
            }
             <Link to="/"><button onClick={logOutHandle} className="logoutBtn"><BiLogOut className="dashboard-menu-icon" />Log Out</button></Link>
        </div>
    );
};

export default DashboardMenu;