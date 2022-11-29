/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faTelegram, faSnapchatSquare, faViber, } from '@fortawesome/free-brands-svg-icons';
import ContactComponent from '../ContactComponent/ContactComponent'
import "./ContactPage.Module.css"


function ConstactPage() {

  return (

    <div className='contactPage'>
      <Fade delay={300}>
        <ContactComponent />
        <div>
          <div className='socialMain'>
            <Container>
              <h3 className='text-center' >  <Fade delay={2500} duration={80} cascade>More...</Fade></h3>

              <div>
                <Row>
                  <div className='col-6'>
                    <ul>
                      <Fade cascade damping={0.4} delay={3000} >
                        <a href="http://t.me/aslam.nip" target="blank"><li><FontAwesomeIcon icon={faTelegram} /> Telegarm</li></a>
                        <a href="#" target="blank"><li><FontAwesomeIcon icon={faSnapchatSquare} /> SnapChat</li></a>
                      </Fade>
                    </ul>
                  </div>

                  <div className='col-6'>
                    <ul>
                      <Fade cascade damping={0.4} delay={3000}>
                        <a href="mailto:aslamnip@hotmail.com" ><li><FontAwesomeIcon icon={faEnvelope} /> Hot Mail</li></a>
                        <a href="#" target="blank"><li><FontAwesomeIcon icon={faViber} /> Viber</li></a>
                      </Fade>
                    </ul>
                  </div>
                </Row>
              </div>
            </Container>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ConstactPage;