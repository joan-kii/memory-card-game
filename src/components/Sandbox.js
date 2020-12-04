import React, { useState } from 'react';
import CardImage from './CardImage';
import GameOver from './GameOver';
import RowStyled from '../styles/RowStyled';
import catsList from '../assets/catsList';

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
  const [isGameOver, setIsGameOver] = useState(false);

  const handleClick = (isClicked, index) => {

    if (isClicked) {
      gameOver();
      shuffleArray(images);
      setImages(images);
      shuffleArray(names);
      setNames(names);
    } else {
      props.incrementScore();
      images[index].isClicked = true;
      shuffleArray(images);
      setImages(images);;
      shuffleArray(names);
      setNames(names);
    }
  };

  const gameOver = () => {
    setIsGameOver(true);
    setTimeout(() => {
      setIsGameOver(false);
      props.resetScore();
    }, 3000)
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
      {isGameOver ? 
      <GameOver score={props.score} /> :
        <div>
          <RowStyled>
            {cards.slice(0, 5)}
          </RowStyled>
          <RowStyled>
            {cards.slice(5, 10)}
          </RowStyled>
        </div>
      }
    </main>
  )
}

export default Sandbox;

