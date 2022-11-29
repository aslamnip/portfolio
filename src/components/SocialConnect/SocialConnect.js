import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Fade , Rotate ,Roll } from 'react-awesome-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faLinkedin, faGithub, faInstagram, faTwitter, faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import "./SocialConnect.css"

function SocialConnect() {
    return (
        <div className='socialMain'>
            <Container>
                <h3 className='text-center' >  <Fade duration={80} cascade>Me on social media</Fade></h3>

                <div>
                    <Row>
                        <div className='col-6'>
                            <ul>
                                <Rotate cascade damping={0.4} >
                                    <a href="http://facebook.com/Aslam.NIP" target="blank"><li><FontAwesomeIcon icon={faFacebook} /> Facebook</li></a>
                                    <a href="http://linkedIn.com/Aslamnip" target="blank"><li><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</li></a>
                                    <a href="https://www.instagram.com/aslamnip/" target="blank"><li><FontAwesomeIcon icon={faInstagram} /> Instagram</li></a>
                                    <a href="http://twiter.com/Aslam_Nip" target="blank"><li><FontAwesomeIcon icon={faTwitter} /> Twitter</li></a>
                                </Rotate>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <Roll cascade damping={0.4}>
                                    <a href="https://github.com/aslamnip" target="blank"><li><FontAwesomeIcon icon={faGithub} /> GitHub</li></a>
                                    <a href="/" target="blank"><li><FontAwesomeIcon icon={faWhatsapp} /> Whatapp</li></a>
                                    <a href="mailto:aslam1nip@gmail.com" ><li><FontAwesomeIcon icon={faEnvelope} /> Email me</li></a>
                                    <a href="https://join.skype.com/invite/ntIiFg8mHLA2" target="blank"><li><FontAwesomeIcon icon={faSkype} /> Skype</li></a>
                                </Roll>
                            </ul>
                        </div>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default SocialConnect;