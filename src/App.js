import React, { useState } from 'react';
import Header from './components/Header';
import Sandbox from './components/Sandbox';
import Footer from './components/Footer';

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestscore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
    if (score + 1> bestScore) {
      setBestscore(bestScore + 1);
    }
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="App">
      <Header 
        score={score} 
        bestScore={bestScore} 
        />
      <Sandbox 
        score={score} 
        incrementScore={incrementScore}
        resetScore={resetScore} 
        />
      <Footer />
    </div>
  );
}

export default App;
