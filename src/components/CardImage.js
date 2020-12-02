import React from 'react';
import Card from 'react-bootstrap/Card';

const CardImage = (props) => {
  return (
    <Card onClick={props.handleClick}>
      <Card.Img variant='top' src={props.path} />
      <Card.Body>
        <Card.Title>{props.imageName}</Card.Title>
      </Card.Body>  
    </Card>
  )
};

export default CardImage;
