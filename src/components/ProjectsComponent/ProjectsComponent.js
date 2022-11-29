import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SerivesComponent from '../SerivcesComponent/SerivcesComponent';
import "./ProjectsComponent.Module.css"
import imageOne from "./images/workout.png"
import imageThree from "./images/landing.png"
import imageTwo from "./images/asushop.png"
import imageFour from "./images/asu5.PNG"
import imageFive from "./images/responsiv.PNG"
import imageSix from "./images/pinMatch.PNG"


function ProjectsComponent(props) {
  const { project } = props
  console.log(project)
  return (
    <div id='prjectsComponentMain'>
      <SerivesComponent />
      <div style={{ marginTop: "100px" }} />
      <div className='text-center my-5'>
        <h3>{project}</h3>
        <p> Here some sample of projects</p>
      </div>
      <div id='projectSilder'>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='willHide'>Figma to HTML.</h3>
              <p className='willHide'>A open source figma to simple html.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageTwo}
              alt="Second slide"
            />
            <div className='layer' />

            <Carousel.Caption>
              <h3 className='willHide'>A e-commarce site</h3>
              <p className='willHide'>A e-commarce site fully front end develop with react js.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className='willHide'>Simple landing page</h3>
              <p className='willHide'>
               Simple landing page with html, css and bootstrap.
              </p>
            </Carousel.Caption>

          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageFour}
              alt="4th slide"
            />
            <div className='layer' />

            <Carousel.Caption>
              <h3 className='willHide'>E -commace site templete</h3>
              <p className='willHide'>With html, css, bootstrap and javascript. </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageFive}
              alt="5th slide"
            />
            <div className='layer' />

            <Carousel.Caption>
              <h3 className='willHide'>Responsive Sign in page</h3>
              <p className='willHide'>With html, css, bootstrap and javascript. </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imageSix}
              alt="6th slide"
            />
            <Carousel.Caption>
              <h3 className='willHide'>First slide label</h3>
              <p className='willHide'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='text-center'>
        <Link to="/projects" className="text-center"> <button type='button' className='seeMoreProjBtn '>More Projects</button></Link>
      </div>


    </div>


  );
}

export default ProjectsComponent;