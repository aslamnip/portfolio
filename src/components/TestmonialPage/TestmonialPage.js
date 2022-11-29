/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import "./TestmonioalPage.Module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';


const clients = [
    {
        no: "2",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "AB De Villiars",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "3",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Hasim Amla",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "4",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Rolando",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "5",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Leo Messi",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "6",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Ben Stokes",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },

    {
        no: "7",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Brain Strock",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "8",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Virat Koli",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "9",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Dale Styne",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },

    {
        no: "10",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Princess",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "11",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Alex Hales",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "12",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Bin Salman",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "13",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Trump",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "14",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Obama",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "15",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Elon Musk",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },
    {
        no: "16",
        clentImage: " <FontAwesomeIcon className='fa-8x' icon={faUser} />",
        name: "Sakib Al Hasan",
        note: "It is  an example of client review. He done his job well and in time , I recomend him for quick and perfect work. He will change your hired worker exprience, I will hire him again",
        revewImage: ""
    },


]


function TestmonioalPage() {
    let [move, setMove] = useState(0)

    let animation = () => {
        if (move < ((clients.length / 3) - 1) * 400) {
            setMove(move += 0.1)
        }
        else {
            setMove(0)
        }
    }

    useEffect(() => {
        let interval = setInterval(animation, 10);
        return () => clearInterval(interval)

    }, [animation])

    const backOnTop = () => {
        setMove(0)
    }








    return (

        <div className='clientsMainDiv'>
            <Container>
                <Fade delay={400} duration={1000}>
                    <div className='rowFlex'>
                        {clients.map(data =>
                            <div key={data.no} style={{ transform: `translateY(-${move}px)`, }} className='eachReview'>
                                <Zoom>
                                    <div className='imagePart'>
                                        <FontAwesomeIcon className='fa-8x' icon={faUser} />
                                    </div>
                                    <div className='notePart'>
                                        <p>&quot;...{data.note} &quot;</p>
                                        <p> --{data.name}</p>
                                    </div>
                                </Zoom>
                            </div>
                        )}
                    </div>
                </Fade>
                <button id='backToTop' type='button' onClick={backOnTop}> <FontAwesomeIcon className='fa-2x faArrow' icon={faArrowAltCircleUp} /></button>
            </Container>
        </div >

    );
}

export default TestmonioalPage;