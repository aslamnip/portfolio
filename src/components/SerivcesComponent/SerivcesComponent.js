import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import "./SerivcesComponent.Module.css"

function SerivesComponent() {
    return (
        <div>
            <h2 className='text-center'>
                <Fade cascade duration={100}>
                    What I provide?
                </Fade>
            </h2>

            <div className='rowForProject'>
                <div className=' projectDiv'>
                    <Fade direction='left'>
                        <div className='projectCol'>
                            <ul>
                                <li> <span>&#10004;</span> Landing Page Design.</li>
                                <li> <span>&#10004;</span> Simple Templete Design.</li>
                                <li> <span>&#10004;</span> UX, UI Templete Design.</li>
                                <li> <span>&#10004;</span> Stylish Portfolio.</li>
                            </ul>
                        </div>
                    </Fade>
                </div>

                <Zoom>
                    <div className='projectDiv'   >
                        <div className="projectCol">
                            <ul>
                                <li><span>&#10004;</span> Frontend Web deploper.</li>
                                <li><span>&#10004;</span> Javascript Problem Solving.</li>
                                <li><span>&#10004;</span> Bug Free Services.</li>
                                <li><span>&#10004;</span> Firebase Authentication. </li>
                            </ul>
                        </div>
                    </div>
                </Zoom>


                <div className='projectDiv'>
                    <Fade direction='right'>
                        <div className="projectCol" id='lastChild'>
                            <ul>
                                <li><span>&#10004;</span>PSD to HTML.</li>
                                <li><span>&#10004;</span>Figma To HTML.</li>
                                <li><span>&#10004;</span>HTML To React.</li>
                                <li><span>&#10004;</span>Responsive Design   </li>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default SerivesComponent;