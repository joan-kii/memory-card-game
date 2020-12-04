// Imports

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Bar from '../styles/BarStyled';

// Functions 

const Header = (props) => {

  return (
    <header>
      <Bar>
        <Navbar className='justify-content-between' expand='lg'>
          <Navbar.Brand href="#home">MemoCat</Navbar.Brand>
          <Navbar.Brand>¡Haz click y memoriza!</Navbar.Brand>
          <Nav>
            <h5>
              Puntuación Actual  <Badge variant='light'>{props.score}</Badge>
            </h5>
            <h5>
              Mejor Puntuación  <Badge variant='light'>{props.bestScore}</Badge>
            </h5>
          </Nav>
        </Navbar>  
      </Bar>
    </header>
  )
};

export default Header;

