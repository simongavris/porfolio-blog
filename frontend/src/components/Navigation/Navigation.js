import React from 'react';
import * as styles from './Navigation.module.css';
import { NavLink } from "react-router-dom";
import  {Offcanvas, Container, Navbar, NavDropdown, Nav} from "react-bootstrap";

function Navigation() {
    const navBarOffcanvas = React.createRef();
    return (
        <div className="navigation">
            <Navbar bg="transparent" expand="true" className="fixed-top">
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas placement="start" ref={navBarOffcanvas}>
                        <Offcanvas.Header closeButton/>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <NavLink to="/"
                                         className={({ isActive }) => styles.NavLink + " " + (isActive ? styles.Active : "")}
                                         onClick={console.log (navBarOffcanvas.current)}
                                >Home</NavLink>
                                <NavLink to="/contact" className={({ isActive }) => styles.NavLink + " " + (isActive ? styles.Active : "")}>Contact</NavLink>
                                <NavLink to="/blog" className={({ isActive }) => styles.NavLink + " " + (isActive ? styles.Active : "")}>Blog</NavLink>
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
