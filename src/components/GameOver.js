// Imports 

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Functions

const GameOver = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered>

      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 >¡Bien hecho!</h2>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>Puntuación: {props.score}</h5>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default GameOver;