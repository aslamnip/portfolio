/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavMobile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faContactBook, faHandsHelping, faFileText } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import logo from "../images/aslamWhite.png"


function NavMoible() {
    const activeClassName = 'activeSmall';
    return (
        <div>
            <div className='d-flex'>
               <NavLink to='/'><img className='logForSm' src={logo} alt="aslam" /></NavLink> 
              <a className='topMailBar'   href="mailto:aslam1nip@gmail.com"> <FontAwesomeIcon  icon={faEnvelope} /> <br /></a> 
            </div>
            <div className='navForSmall'>
                <ul>
                    <li>
                        <NavLink end to="/" className={({ isActive }) => isActive ? activeClassName : undefined} >
                            <FontAwesomeIcon className='NavIconSmall' icon={faHome} /> <br />
                            <p className='smNavText'>Home</p>
                            <div className='indi' />
                        </NavLink>
                    </li>



                    <li>
                        <NavLink to="about" className={({ isActive }) => isActive ? activeClassName : undefined} >
                            <FontAwesomeIcon className='NavIconSmall' icon={faUser} /> <br />
                            <p className='smNavText'>About</p>
                            <div className='indi' />

                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="projects" className={({ isActive }) => isActive ? activeClassName : undefined}>
                            <FontAwesomeIcon className='NavIconSmall' icon={faContactBook} /> <br />
                            <p className='smNavText'>Projects</p>
                            <div className='indi' />
                        </NavLink>

                    </li>
                    <li className=''>
                        <NavLink to="testmonial" className={({ isActive }) => isActive ? activeClassName : undefined}>
                            <FontAwesomeIcon className='NavIconSmall' icon={faHandsHelping} /> <br />
                            <p id='testmonial' className='smNavText'>Testmonial</p>
                            <div className='indi' />
                        </NavLink>


                    </li>
                    <li>
                        <NavLink to="contact" className={({ isActive }) => isActive ? activeClassName : undefined}>
                            <FontAwesomeIcon className='NavIconSmall' icon={faFileText} /> <br />
                            <p className='smNavText'>Contact</p>
                            <div className='indi' />
                        </NavLink>
                    </li>
                    <div className='indicator' >
                        <div className='indBefore ' />
                        <div className='indAfter ' />
                    </div>



                </ul>
            </div>
        </div>
    );
}

export default NavMoible;