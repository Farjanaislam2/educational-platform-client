import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Course = () => {
    const course = useLoaderData();
    const {about, picture, title, _id} = course;
    return (
        <div className='justify-content-center align-content-center ms-5 mt-5 ps-5'>
          <h1>Welcome To Our Premium Courses</h1>
          
           <Card className='ms-5' style={{ width: '28rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {about}
        </Card.Text>
     
      </Card.Body>
    </Card>
        </div>
    );
};

export default Course;