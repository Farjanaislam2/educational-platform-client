import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Catergories from '../Categories/Catergories';
import Details from '../Details/Details';

const Courses = () => {
    return (
       <div>
        <h1>Welcome To Our Web Development Courses</h1>
        <Container>
            <Row>
                <Col lg='3'>
                <Catergories></Catergories>
                </Col>
                <Col lg='7'>
                <Details></Details>
                </Col>
                <Col lg='2'>
                <button>Get Premium Access</button>
                </Col>

            </Row>
        </Container>
       </div>
    );
};

export default Courses;