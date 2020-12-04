import React from 'react';

const GameOver = (props) => {
  return (
    <div>
      <h2>¡Bien Hecho!</h2>
      <p>Puntos: {props.score}</p>
    </div>
  )
};

export default GameOver;