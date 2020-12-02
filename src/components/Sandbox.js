import React from 'react';

const shuffleArray = (array) => {
  let i = array.lenght - 1;
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Sandbox = () => {
  return (
    <main> 
    </main>
  )
}

export default Sandbox;