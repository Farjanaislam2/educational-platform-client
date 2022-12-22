import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaDashcube, FaDatabase, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Button from 'react-bootstrap/Button';
import Theme from "../Theme/Theme";
import ReactTooltip from 'react-tooltip';

const Header = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut =()=>{
    logOut()
    .then( () =>{})
    .catch(error => console.error(error))
  }
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
              <Nav.Link  to="">
                  {user ? 
                    <>
                      <span> {user?.displayName}</span>
                      <Button onClick={handleLogOut} variant="primary" style={{color: 'black'}}>Log out</Button>
                    </>
                   : 
                    <>
                      <Link className="me-3 text-dark" to="/login">Login</Link>
                      <Link className="text-dark" to="/register">Register</Link>
                    </>
                  }
                </Nav.Link>
               
            </Nav>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="#deets">
                  {user ? (
                    <Image
                      style={{ height: "30px" }}
                      roundedCircle
                      src={user.photoURL}
                    ></Image>
                  ) : (
                    
                        <FaUser></FaUser>

                  )}
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
