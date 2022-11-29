/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./TestmonialComponent.css";
// import image from "../TopHeader/Image/aslam2.png"

function TestmonialComponent() {
    //  const [opacityes, setOpacities] = useState(1);
    const clients =
        [
            {
                no: 1,
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "AB De Villiars",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
                revewImage: ""
            },
            {
                no: 2,
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Babar Azam",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your  working exprience, I will hire him again",
                revewImage: ""
            },
            {
                no: 3,
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Alex Hales",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your  working exprience, I will hire him again",
                revewImage: ""
            },
            {
                no: 4,
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Liton Kumar Das",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your  working exprience, I will hire him again",
                revewImage: ""
            },
            {
                no: 5,
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Joss Butler",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your  working exprience, I will hire him again",
                revewImage: ""
            },
            {
                no: 6,
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Ronaldo",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your  working exprience, I will hire him again",
                revewImage: ""
            },
            {
                no: 7,
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Play",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your  working exprience, I will hire him again",
                revewImage: ""
            },
            {
                no: "8",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Little Mushi",
                note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your  working exprience, I will hire him again",
                revewImage: ""
            },
        ]

    let [move, setMove] = useState(0)
    const animation = () => {
        if (move < ((clients.length - 2) * 300)) {
            setMove(move += 305)
        }
        else {
            setMove(0)
        }
    }

    setTimeout(animation, 3500);




    //     const abijubi = () => {
    //         if (move > 360) {
    //             setOpacities(0)
    //             console.log("greter than  to hide")
    //         }
    //         else {
    //             setOpacities(1)
    //         }

    // }

    //    // setTimeout(abijubi, 1000);




    return (
        <div className='TestmonialComponent'>
            <Container>

                <div>
                    <Zoom>
                        <h3 className='text-center my-5'>Clients Review</h3>
                    </Zoom>

                    <div className='main'>
                        {
                            clients.map(data => <div key= {data.no} style={{ transform: `translateY(-${move}px)`, opacity: 1 }} className='slidingPart'>

                                <div  className='col-6 text-center'>
                                    <Slide>
                                        {/* <img src={image} alt="" /> */}
                                        <FontAwesomeIcon className='fa-8x' icon={faUser} />
                                    </Slide>

                                </div>
                                <div className='col-6 mt-0'>
                                    <Slide direction='right'>
                                        <p  className='mb-0 pb-0'>
                                            <span>Review no : {data.no} </span><br />
                                            <span>&quot;...{data.note} &quot;</span>
                                        </p>
                                        <h5>{data.name}</h5>
                                    </Slide>
                                </div>


                            </div>)
                        }

                    </div>

                </div>
                <div className='text-center my-5'>
                <Link className='text-center' to="/testmonial">  <button className='buttonProject mt-5' type='button'>See more reviews </button></Link>
                </div>
                


            </Container>
        </div>
    );
}

export default TestmonialComponent;