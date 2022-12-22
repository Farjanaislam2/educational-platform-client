import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const AllCourses = ({ course }) => {
 const { about, picture, title, _id } = course;
  //console.log(course);

  return (

      
       <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

       <button type="button" className="btn btn-primary w-100" >
       <Link style={{textDecoration: 'none', color: 'black'}} to={`/course/${_id}`}>Get premium Access</Link>
       </button>
      </Card.Body>
    </Card>
      
    
  );
};

export default AllCourses;
