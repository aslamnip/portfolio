import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faContactBook, faHandsHelping, faFileText, } from '@fortawesome/free-solid-svg-icons'
import Logo from "./images/aslamWhite.png"
import NavMoible from './NavMobile/NavMoible';



function Navbar() {
    const activeWeb = "activeWeb"
    return (
        <div className='navSection'>
            <div className=' navForWeb'>
                <Container>
                    <div className='navMainDiv'>
                        {/* <h2 className='logoForLg'>Empire of Aslam</h2> */}
                      <NavLink to = "/"><img className='logoForLg' src ={Logo} alt="" /></NavLink>  

                        <ul>
                            <li >
                                <NavLink end to="/" className={({ isActive }) => isActive ? activeWeb : undefined}>
                                    <FontAwesomeIcon className='NavIcon' icon={faHome} /> <span className='navText'>Home</span>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to="about" className={({ isActive }) => isActive ? "activeWeb" : undefined}>
                                    <FontAwesomeIcon className='NavIcon' icon={faUser} /> <span className='navText'>About </span>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to="projects" className={({ isActive }) => isActive ? "activeWeb" : undefined}>
                                    <FontAwesomeIcon className='NavIcon' icon={faHandsHelping} /> <span className='navText'>Projects</span>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to="testmonial" className={({ isActive }) => isActive ? "activeWeb" : undefined}> <
                                    FontAwesomeIcon className='NavIcon' icon={faFileText} /> <span className='navText'>Testmonial</span>
                                </NavLink >
                            </li>
                            <li>
                                <NavLink to="contact" className={({ isActive }) => isActive ? "activeWeb" : undefined}>
                                    <FontAwesomeIcon className='NavIcon' icon={faContactBook} /> <span className='navText'>Contact</span>
                                </NavLink >
                            </li>
                            
                        </ul>
                    </div>
                </Container>

            </div>



            <div className='navSmallComponent'>
                <NavMoible />
            </div>

        </div>

    );
}

export default Navbar;