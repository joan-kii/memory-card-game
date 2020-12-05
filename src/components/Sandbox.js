// Imports

import React, { useState } from 'react';
import CardImage from './CardImage';
import GameOver from './GameOver';
import RowStyled from '../styles/RowStyled';
import catsList from '../assets/catsList';

// Functions

const namesList = ['Missy', 'Lissy', 'Sissy', 'Wissy',
  'Tissy', 'Kissy', 'Dissy', 'Fissy', 'Rissy', 'Nissy'];

const shuffleArray = (array) => {

  let i = array.length - 1;
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Sandbox = (props) => {

  const [images, setImages] = useState(catsList);
  const [names, setNames] = useState(namesList);
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (isClicked, index) => {

    if (isClicked) {
      setModalShow(true);
      shuffleArray(images);
      setImages(images);
      shuffleArray(names);
      setNames(names);
    } else {
      props.incrementScore();
      images[index].isClicked = true;
      shuffleArray(images);
      setImages(images);
      shuffleArray(names);
      setNames(names);
    }
  };

  const gameOver = () => {
    setModalShow(false);
    props.resetScore();
    images.map((img) => {
      img.isClicked = false;
      setImages(images);
      return images;
    })
  };

  const cards = images.map((img, index) => (
    <CardImage 
      key={index}
      path={img.img}
      imageName={names[index]}
      onClick={() => handleClick(img.isClicked, index)} />
  ));

  return (
    <main> 
      <GameOver 
        score={props.score} 
        show={modalShow}
        onHide={() => gameOver()} />
        <div>
          <RowStyled>
            {cards.slice(0, 5)}
          </RowStyled>
          <RowStyled>
            {cards.slice(5, 10)}
          </RowStyled>
        </div>
    </main>
  )
}

export default Sandbox;

