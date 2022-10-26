import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaDashcube, FaDatabase, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className="fw-bold fs-2 me-5 " href="#">
            Educational Platform <FaDashcube></FaDashcube>
          </Navbar.Brand>
          <Navbar.Toggle />
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
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="#deets">{user?.displayName}</Nav.Link>

              
                <Nav.Link eventKey={2} href="#deets">
                  {user.photoURL ? 
                    <Image
                      style={{ height: "30px" }}
                      roundedCircle
                      src={user.photoURL}
                    ></Image>
                   :
                    
                    <FaUser></FaUser>
                  }
                </Nav.Link>
                <Nav.Link href="#deets">
                
                    {
                    <>
                      <Link className="bg-light p-2 rounded" to="/login">
                        Login
                      </Link>
                      <Link className="bg-light p-2 rounded" to="/register">
                        Register
                      </Link>
                    </>
                  }
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
