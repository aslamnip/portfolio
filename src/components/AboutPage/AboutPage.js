import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import AboutComponent from '../AboutComponent/AboutComponent';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import FaQ from '../FaQ/FaQ';
import "./AboutPage.Module.css"
import "animate.css"

function AboutPage() {
    return (
        <div>
            <Fade duration={2000}>
                <AboutComponent />
                <Zoom><h3 className='text-center'>Skills</h3></Zoom>
                <div className='tableAbout'>
                    <table>
                        <tbody>
                            <tr className='animate__animated animate__slideInRight'>
                                <td className='skillName'>HTML</td>
                                <td>95%</td>

                            </tr>
                            <tr className='animate__animated animate__slideInLeft'>
                                <td className='skillName'>CSS</td>
                                <td>93%</td>
                            </tr>
                            <tr className='animate__animated animate__slideInRight'>
                                <td className='skillName'>Bootstrap</td>
                                <td>88%</td>
                            </tr>
                            <tr  className='animate__animated animate__slideInLeft'>
                                <td className='skillName'>Javascript</td>
                                <td>70%</td>
                            </tr>
                            <tr className='animate__animated animate__slideInRight'>
                                <td className='skillName'>React</td>
                                <td>65%</td>
                            </tr>
                            <tr  className='animate__animated animate__slideInLeft'>
                                <td className='skillName'>Python</td>
                                <td>20%</td>
                            </tr>
                            <tr className='animate__animated animate__slideInRight'>
                                <td className='skillName'>DJ Ango</td>
                                <td>0%</td>
                            </tr>
                            <tr  className='animate__animated animate__slideInLeft'>
                                <td className='skillName'>My SQL</td>
                                <td>0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <PersonalInfo/>
                <FaQ />
            </Fade>
        </div>
    );
}

export default AboutPage;