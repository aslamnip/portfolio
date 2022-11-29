import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import "./FaQ.css"

function FaQ() {
    return (
        <Container>
            <h4 className='text-center my-5'>Frequently Ask Question</h4>
            <div className='faqMainDIv'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header id='accHead'>1. Why I would like to choose Aslam?</Accordion.Header>
                        <Accordion.Body>
                            You will get a bug free, responsive, stylish website in your time.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. What is your delivery time ?</Accordion.Header>
                        <Accordion.Body>
                           Littel projects took 2 to 7 days and big projects took 7 to 30 days.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>3. How can I pay you?</Accordion.Header>
                        <Accordion.Body>
                           Intrnational -Bank transfer, Payoneer , Skrill, Zoom. <br />
                           Local - Bkash, Nagad, Rocket, Cellfin, Banktranfer.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>4. How Can I contact with you?</Accordion.Header>
                        <Accordion.Body>
                          Contact list are given in <a href="/contact">Contact page</a>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>5. I had been message you, why you not responding?</Accordion.Header>
                        <Accordion.Body>
                         First check is it successful or not, and please try again. For better service email me  directly or message me on WhatsApp, Facebook and LinkedIn.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container >

    );
}

export default FaQ;