import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const AllCourses = ({ course }) => {
 const { about, picture, title, _id } = course;
  //console.log(course);

  return (
    <div  className="container ">
       <div className="mb-5 d-lg-3 col-sm-1">
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

       <button>
       <Link to={`/course/${_id}`}>Get premium Access</Link>
       </button>
      </Card.Body>
    </Card>
       </div>
    </div>
  );
};

export default AllCourses;
