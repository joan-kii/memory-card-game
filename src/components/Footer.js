// Imports

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Bar from '../styles/BarStyled';

// Functions 

const Footer = () => {

  return (
    <footer>
      <Bar>
        <Navbar className='justify-content-around' expand='lg'>
          <Nav.Link href='https://www.theodinproject.com/' target='_blank'>The Odin Project</Nav.Link>
          <Nav.Link href='https://github.com/joan-kii?tab=repositories' target='_blank'>joankii's GitHub</Nav.Link>
        </Navbar>  
      </Bar>
    </footer>
  )
};

export default Footer;