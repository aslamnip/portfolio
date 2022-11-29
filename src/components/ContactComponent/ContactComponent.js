import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { JackInTheBox, Zoom } from 'react-awesome-reveal';
import SocialConnect from '../SocialConnect/SocialConnect';
import EmailModal from '../EmailModal/EmailModal';
import "./ContactComponent.Modeul.css"

function ContactComponent() {
    const [nameValue, setNameValue] = useState('')
    const handleName = (event) => {
        setNameValue(event.target.value)
    }
    return (
        <div className='constactComponent'>
            <Zoom>
                <h2 className='text-center'>Contact Information</h2>
            </Zoom>
            <Container>
                <JackInTheBox>
                    <div className='secondayContact'>
                        <h4> Sent a  message,</h4><br /><br />
                        <Form action='/'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicTextInput">
                                <Form.Control type="text" onChange={handleName} value={nameValue} placeholder="Name" required />
                            </Form.Group>
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicTextInput">
                                <Form.Control as="textarea" rows={7} type="text" placeholder="Your Message" required />
                            </Form.Group>
                            <br />

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check id='try' type="checkbox" label="I'am agree to all terms and policy." required />
                            </Form.Group>
                            <EmailModal nameValue={nameValue} />
                        </Form>
                    </div>
                </JackInTheBox>


            </Container>
            <SocialConnect />

        </div>
    );
}

export default ContactComponent;