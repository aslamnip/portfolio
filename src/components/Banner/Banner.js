import React from 'react';
import { Slide } from "react-awesome-reveal";
import "animate.css"

function Banner() {
    return (
        <div>
            <Slide >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci natus amet aliquid dolore voluptate. Veniam, facere necessitatibus! Dignissimos expedita itaque a iusto odio, nulla aperiam sint sunt ut officia repellendus!</p>
            </Slide >
            <p className='animate__bounce'>Lorem ipsum dolor sit amet.</p>
            <h1 className="animate__animated animate__bounce">An animated element</h1>
        </div>
    );
}

export default Banner;