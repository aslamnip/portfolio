import React from 'react';
import { NavLink } from 'react-router-dom';
import TopHeader from '../TopHeader/TopHeader';
import AlertComponent from '../AlertComponent/AlertComponent';
import AboutComponent from '../AboutComponent/AboutComponent';
import ProjectsComponent from '../ProjectsComponent/ProjectsComponent';
import TestmonialComponent from '../TestmonialComponent/TestmonialComponent';
import ContactComponent from '../ContactComponent/ContactComponent';


function Home() {
    return (
        <div>
            <TopHeader />
            <AlertComponent />
            <AboutComponent About="About me">
                <NavLink to='about'> Know More</NavLink>
            </AboutComponent>
            <ProjectsComponent project="Projcets Sample" />
            <TestmonialComponent />
            <ContactComponent />
        </div >
    );
}

export default Home;