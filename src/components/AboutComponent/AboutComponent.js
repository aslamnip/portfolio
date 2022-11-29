/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Row, Container } from 'react-bootstrap';
import {   Zoom} from 'react-awesome-reveal';
import "./AboutComponent.Module.css"

function AboutComponent(props) {
    const { About } = props;
    return (
        <Container className='pb-5'>
            <div className='text-center mt-5'>
              <Zoom><h2 className='headerTitle   my-5 mx-auto'>{About}</h2></Zoom>  
                <Row>
                    <div className=' mt-5 leftCol  col-md-6'>
                        <Zoom left >
                            <h5>Personal info</h5>
                            <hr />
                            <p>With  ceative disign and problem solving skill, a hard worker boy.</p>
                            <hr />
                            <p>Love programming, love my work.</p>
                            <hr />
                            <p>I like to solve mathmathical problems</p>
                            <hr />
                            <p>Enough attentive to my work for finish work in time. </p>
                        </Zoom>
                    </div>



                    <div className='mt-5 rightCol col-md-6'>
                    <Zoom right>

                        <h5>Skill & Experience</h5>
                        <hr />
                        <p> High level skill on HTML, CSS and Bootstrap. </p>
                        <hr />
                        <p>High-medium  level skill on Javascript and React.js </p>
                        <hr />
                        <p>As a devloper more than one and half years experience on this filds</p>
                        <hr />
                        <p>Real life projects experience</p>
                        </Zoom>
                    </div>
                </Row>
                <h3 className='mt-3'>{props.children}</h3>


            </div>
        </Container>

    );
}

export default AboutComponent;