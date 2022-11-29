/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
const {nameValue}= props

    // css
    const MarginStyle = {
        color : "white",
    textDecoration : "none"     
   }


    return (
       
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Dear {nameValue},
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Please Attention!!</h4>
                <p>
                    This directly message system is not working now properly. We are improving this. Soon you will get a soluation, Now you can sent me direct mail,
                    <br /> Thanks
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button  variant='danger' className='me-auto' ><a style={MarginStyle} className='mailLink' href="mailto://aslam1nip@gmail.com">Email me</a> </Button>
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
        </Modal>
    );
}

function EmailModal(props) {
    const {nameValue} = props;
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button id='BtnInput' variant='primary' type="submit" onClick={() => setModalShow(true)}>
                Submit
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                nameValue = {nameValue}
            />
        </>
    );
}
export default EmailModal