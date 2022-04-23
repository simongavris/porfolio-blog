import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import  {Offcanvas, Container, Navbar, NavDropdown, Nav} from "react-bootstrap";


function Navigation() {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="navigation">
            <Navbar expanded={expanded} expand="true" className="fixed-top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Offcanvas placement="start">
                        <Offcanvas.Header closeButton onClick={() => setExpanded(false)}/>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink onClick={() => setExpanded(false)} to="/" className={({ isActive }) => styles.NavLink + " " + (isActive ? styles.Active : "")}>
                                    Home
                                </NavLink>
                                <NavLink onClick={() => setExpanded(false)} to="/contact" className={({ isActive }) => styles.NavLink + " " + (isActive ? styles.Active : "")}>
                                    Contact
                                </NavLink>
                                <NavLink onClick={() => setExpanded(false)} to="/blog" className={({ isActive }) => styles.NavLink + " " + (isActive ? styles.Active : "")}>
                                    Blog
                                </NavLink>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    );
}


Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
