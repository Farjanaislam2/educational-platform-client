import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    const {about, picture, title, _id} = course;
    return (
        <div className='justify-content-center align-content-center ms-5 mt-5 ps-5'>
          <div>
          
          <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}
      </Pdf>
          <h1>Welcome To Our Premium Courses</h1>

          </div>
           <Card ref={ref} className='ms-5' style={{ width: '28rem' }}>
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