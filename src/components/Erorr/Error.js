import React from 'react';
import "./Error.Module.css"
import { Fade } from 'react-awesome-reveal';

function h1() {
    return (
        <div className='errorMain'>
            <div className='errorMessage'>
                <h1><Fade cascade duration={400}>Opps! 404</Fade></h1>
                <Fade cascade  damping={1} delay={1500}> 
                    <small>There is an error</small>
                    <p>The page is not found</p>
                </Fade>

            </div>


        </div>
    );
}

export default h1;