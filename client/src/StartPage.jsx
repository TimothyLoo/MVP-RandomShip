import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { crashed } from './stars.js';
import { GameState } from './App.jsx';

export default function StartPage() {
  const [topScores, setTopScores] = useState([]);

  const setAppSt = useContext(GameState);

  useEffect(() => {
    axios
      .get('/topScores')
      .then(({ data }) => setTopScores(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='start'>
      <button
        onClick={() => {
          setAppSt('game');
          crashed = false;
        }}>
        Start Game
      </button>
      <br />
      <u>
        <b>Top Scores</b>
      </u>
      {topScores.map((score) => (
        <div>{score.score}</div>
      ))}
    </div>
  );
}
