// Imports

import React from 'react';
import Card from 'react-bootstrap/Card';
import CardStyled from '../styles/CardStyled';


// Function

const CardImage = (props) => {

  return (
    <CardStyled>
      <Card style={{width: '15rem'}} onClick={props.onClick}>
        <Card.Img variant='top' src={props.path} />
        <Card.Body>
          <Card.Title className='title' >{props.imageName}</Card.Title>
        </Card.Body>  
      </Card>
    </CardStyled>
  )
};

export default CardImage;
