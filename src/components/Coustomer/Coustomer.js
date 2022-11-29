/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { Zoom } from 'react-awesome-reveal';
import "./Coustomer.css";
// import image  from "../TopHeader/Image/aslam2.png"

function Coustomer() {
    //  const [opacityes, setOpacities] = useState(1);
    const clients =
        [
            {
                no: "Review no 1",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "AB De Villiars",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
            {
                no: "Review no 2",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Babar Azam",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
            {
                no: "Review no 3",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Alex Hales",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
            {
                no: "Review no 4",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Liton Kumar Das",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
            {
                no: "Review no 5",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Joss Butler",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
            {
                no: "Review no 6",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Ronaldo",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
            {
                no: "Review no 7",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Play",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
            {
                no: "Review no 8",
                clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
                name: "Little Mushi",
                note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.",
                revewImage: ""
            },
        ]

    let [move, setMove] = useState(0)
    const animation = () => {
        if (move < ((clients.length - 2) * 270)) {
            setMove(move += 275)
        }
        else {
            setMove(0)
        }
    }

    setTimeout(animation, 3000);




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

        <div>
            <Container>
                <div>
                    <div className='main'>
                        {
                            clients.map(data => <div style={{ transform: `translateY(-${move}px)`, opacity: 1 }} className='slidingPart'>
                                <div className='col-6 text-center'>
                                    <FontAwesomeIcon className='fa-8x' icon={faUser} />
                                </div>
                                <div className='col-6'>
                                    <p>{data.no}</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit non pariatur alias reiciendis repellendus vitae, aspernatur debitis? Libero odit aliquam accusamus sed aut minus possimus voluptate delectus quibusdam enim.</p>
                                    <h5>{data.name}</h5>
                                </div>
                            </div>)
                        }

                    </div>

                </div>
            </Container>

        </div>
    )
}

export default Coustomer;