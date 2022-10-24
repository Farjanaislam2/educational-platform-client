import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className="fw-bold fs-2 " href="#">
            Educational Platform
          </Navbar.Brand>
          <Navbar.Toggle  />
          <Navbar.Collapse>
            <Nav
              className="me-auto my-2  fw-semibold"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="#action2">Toggle Theme</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
