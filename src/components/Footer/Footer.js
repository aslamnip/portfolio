import React from 'react';
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faLinkedin, faGithub, faInstagram, faTwitter, faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons';
import "./Footer.Module.css"

function Footer() {
    return (
        <div className='fotter'>
            <Container>
                <hr />
                <div className='fotterNav' >
                    <div className='willHideList'>
                        <ul >
                            <li><a href="https://www.instagram.com/aslamnip"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="http://twiter.com/Aslam_Nip"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                            <li><a href="https://join.skype.com/invite/ntIiFg8mHLA2"><FontAwesomeIcon icon={faSkype} /></a></li>

                        </ul>
                    </div>

                    <p className='text-center pb-3'>&copy; Aslam !! 2023</p>
                    <ul>
                        <li><a href="http://facebook.com/Aslam.NIP"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="http://linkedIn.com/Aslamnip"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="https://github.com/aslamnip"><FontAwesomeIcon icon={faGithub} /></a></li>
                        <li><a href="mailto:aslam1nip@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>

                    </ul>

                </div>
            </Container>
        </div>
    );
}

export default Footer;