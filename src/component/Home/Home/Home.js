import React from 'react';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Header from '../Header/Header';
import Services from '../Services/Services';
import "./Home.css"
import Testmonial from '../Testmonial/Testmonial';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
    return (
        <>
            <Header/>
            <Services/>
            <FeaturedServices/>
            <HomeAppointment/>
            <Testmonial></Testmonial>
            <Blog/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;