import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Catergories from '../Categories/Catergories';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../AllCourses/AllCourses';


const Courses = () => {
    const courses= useLoaderData();
    // console.log(courses)
    return (
       <div>
        
        <Container>
            <Row>  
                <Col lg='3'>
                <Catergories></Catergories>
                </Col>
                <Col lg='7'>
                <h1 className='text-center'>Welcome To Our Web Development Courses</h1>
               
                    <h4>All Courses:{courses.length}</h4>
                    {
                        courses.map(course => <AllCourses
                            key={courses._id}
                            course={course}>

                            </AllCourses>)
                    }
               
                </Col>
            </Row>
        </Container>
       </div>
    );
};

export default Courses;