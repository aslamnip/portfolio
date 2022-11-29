import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form , Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

function NavExm() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
            <Container>
                <NavLink className='nav-item' exact to="/"><Navbar.Brand > React-Bootstrap </Navbar.Brand></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink className='nav-item text-light' exact to="/"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className='nav-item text-light' exact to="/root"><FontAwesomeIcon icon={faUser} /> Root</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className='nav-item text-light' exact to="/courosel"><FontAwesomeIcon icon={faUser} /> Courosel</NavLink>
                        </Nav.Link>

                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavExm;