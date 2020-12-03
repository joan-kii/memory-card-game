import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import CardImage from './CardImage';
import catsList from '../assets/catsList';

const namesList = ['Missy', 'Lissy', 'Sissy', 'Wissy',
  'Tissy', 'Kissy', 'Dissy', 'Fissy', 'Rissy', 'Nissy'];

const shuffleArray = (array) => {
  let i = array.lenght - 1;
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};



const Sandbox = () => {

  const [images, setImages] = useState(catsList);
  const [names, setNames] = useState(namesList);

  const handleClick = (isClicked, index) => {

    if (isClicked) {
      shuffleArray(images);
      setImages(images);
      shuffleArray(names);
      setNames(names);
    } else {
      images[index].isClicked = true;
      shuffleArray(images);
      setImages(images);
      shuffleArray(names);
      setNames(names);
    }
  };

  const cards = images.map((img, index) => (
    <CardImage 
      key={index}
      path={img.img}
      imageName={names[index]}
      onClick={() => handleClick(img, index)} />
  ));

  return (
    <main> 
      <Row>
        {cards}
      </Row>
    </main>
  )
}

export default Sandbox;