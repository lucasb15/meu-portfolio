import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "./links.json";
import "./index.css"
/*import Idioma from "./Idioma";
import DarkMode from "./Mode";*/

export default function NavBar() {
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src="/assets/logo.png" alt="Logo Provisório do Portfólio" className="img_logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {Link.map(item => (
                                <Nav.Link href={item.src}>{item.nome}</Nav.Link>
                            ))}
                        </Nav>
                        {/*
                        <Nav>
                            <Idioma />
                            <DarkMode />
                        </Nav>
                        */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}