/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from "./Image/aslam.png";
import './TopHeader.css';

function TopHeader() {



    return (
        <div className='topHeader'>
            <Container>
                <div >
                    <Row>
                        <div className='order-md-last  col-md-6'>
                            <Fade delay="5">
                                <div className='imageOnTopHeader'>
                                    <img src={image} alt="ASLAM" />
                                </div>
                            </Fade>




                        </div>

                        <div className='col-md-6'>
                            <Fade direction='down' duration="500">
                                <div className=' shortBio'>
                                    <h3><Fade cascade duration="200"> Hello World !!</Fade></h3>
                              
                                    <h6> <Fade cascade duration="100" delay={2000}>Welcome To Virtual Empire  Of Aslam</Fade></h6>
                                        <p>I&apos;m Aslam , a frontend web developer</p>
                                        <p>with Javascript & React.</p>
                                        <p>Problem Solver & Simple web designer,</p>
                                        <p>UX , UI template designer</p>
                                 

                                    <div className='div-btnHire'>
                                   <Link to="/contact">  <button className='btnHire ' type='button'> Hire me</button></Link> 
                                    </div>

                                </div>
                            </Fade>

                        </div>
                    </Row>
                </div>
            </Container>

        </div>

    );
}

export default TopHeader;