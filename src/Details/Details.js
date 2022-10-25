import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const course = useLoaderData();
    console.log(course)
       
      return (
        <div>
            <h1> all course details:${
            }</h1>
        </div>
    );
};

export default Details;