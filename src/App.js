import React, { createContext } from 'react';
import Home from './component/Home/Home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import 'react-calendar/dist/Calendar.css';
import Appointment from './component/Appointment/Appointment/Appointment';
import DrDashboardAppointments from './component/DoctorDashboard/DrDashboardAppointments/DrDashboardAppointments';
import DoctorDashboard from './component/DoctorDashboard/DoctorDashboard/DoctorDashboard';
import AllPatients from './component/DoctorDashboard/AllPatients/AllPatients';
import AddDoctor from './component/DoctorDashboard/AddDoctor/AddDoctor';
import LogIn from './component/LogIn/LogIn';
import { useState } from 'react';
import PrivetRoute from './component/LogIn/PrivetRoute';



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: ''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <PrivetRoute path="/doctorDashboard">
            <DoctorDashboard />
          </PrivetRoute>
          <PrivetRoute path="/drDasboardAppointments">
            <DrDashboardAppointments />
          </PrivetRoute>
          <PrivetRoute path="/drDasboardPatients">
            <AllPatients />
          </PrivetRoute>
          <PrivetRoute path="/drDasboardPrescriptions">
            <DrDashboardAppointments />
          </PrivetRoute>
          <PrivetRoute path="/drDasboardSettings">
            <DrDashboardAppointments />
          </PrivetRoute>
          <PrivetRoute path="/addDoctors">
            <AddDoctor />
          </PrivetRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;
