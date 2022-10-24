import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div className='mt-5'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
       
      </Card.Body>
      </Card>
        </div>
    );
};

export default Home;