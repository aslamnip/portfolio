import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import "./AlertComponent.css"

function AlertComponent() {
    const [show, setShow] = useState(true);
    const closeAlert = () => {
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }
    // u can use alert for different component with props of parents component

    const alert =
        <div className=' alertText d-flex' >
            <p className='mt-3'>Please note that , I don&apos;t do any kind of alchohole, adult , betting , and illigal website desingn or develop.</p>
            <button onClick={() => closeAlert()} className='btn-Cls' type='button'> &#215; </button>
        </div>

    let alertText = alert


    // eslint-disable-next-line no-unused-expressions
    show ? alertText = alert : alertText = undefined
    return (
        <Container className=' pt-5'>
            <div>
                {alertText}
            </div>
        </Container>

    );
}

export default AlertComponent;