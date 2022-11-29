/* eslint-disable array-callback-return */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import "./ProjectsPage.css"
import image1 from "./images/workout.png"
import image2 from "./images/asushop.png"
import image4 from "./images/landing.png"
import image3 from "./images/ecomamrce.png"
import imageFive from "./images/responsiv.PNG"
import imageSix from "./images/phy.PNG"
import imageseven from "./images/issue.PNG"
import imageEight from "./images/pinMatch.PNG"


const projects = [
    {
        no: 1,
        image: image1,
        name: " WorkOut",
        short: "Figma To HTML - a Landing Page disign of open source Figma file",
        link: '/workout.com'
    },
    {
        no: 2,
        image: image2,
        name: "Asu Shop",
        short: "A E-commarce site design and devlop with React",
        link: '/asuShop.react.com'
    },
    {
        no: 3,
        image: image3,
        name: " Asu Shop 2",
        short: "A simple templete desingn of E commarce site with html, css , bootstrap.",
        link: '/asushop.html.com'
    },
    {
        no: 4,
        image: image4,
        name: " Loop Lap",
        short: "A Landing Page disign with html, css , bootstrap.",
        link: '/looplap.com'
    },
    {
        no: 5,
        image: imageFive,
        name: " Asu Shop",
        short: "Responsisive , customer frindly e-commarce templete.",
        link: '/asushop.com'
    },
    {
        no: 6,
        image: imageSix,
        name: "PHYSQX",
        short: "Download a applicaton landing page",
        link: '/psysqx.com'
    },
    {
        no: 7,
        image: imageEight,
        name: " Pin Matcher",
        short: "A web templete  of pin mather , generate a pin and match by input.",
        link: '/pin.com'
    },
    {
        no: 8,
        image: imageseven,
        name: "Issue Solver",
        short: "Create an issue then close and delete it later.",
        link: '/issue.com'
    },
]
function ProjectsPage() {
    return (
        <div className='ProjectsPage'>
            <div className='projcetGroup'>
                {
                    projects.map(data =>
                        <div key={data.no} className='eachProjects'>
                            <Fade duration={2000}>
                                <img src={data.image} alt="" />
                                <a href={data.link}><h5>{data.name}</h5></a>
                                <small>{data.short}</small>
                                <hr />
                            </Fade>
                        </div>

                    )
                }
            </div>
        </div>
    );
}

export default ProjectsPage;