import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">📚 Math & CS Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/math">Mathematics</Nav.Link>
            <Nav.Link href="/cs">Computer Science</Nav.Link>
            <Nav.Link href="/tools">Tools</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
