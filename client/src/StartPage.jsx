import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { crashed, username } from './stars.js';
import { GameState } from './App.jsx';
import Score from './Score.jsx';

export default function StartPage() {
  const [topScores, setTopScores] = useState([]);
  const [user, setUser] = useState(username);

  const setAppSt = useContext(GameState);

  useEffect(() => {
    axios
      .get('/topScores')
      .then(({ data }) => setTopScores(data))
      .catch((err) => console.log(err));
  }, []);

  const login = (e) => {
    e.preventDefault();
    let u = e.target.elements.username.value;
    if (u.length) {
      username = u;
      setUser(username);
    }
  };

  return (
    <div className='start'>
      <button
        onClick={() => {
          setAppSt('game');
          crashed = false;
        }}>
        Start Game
      </button>
      {user ? (
        <em>Good luck, {user}!</em>
      ) : (
        <form onSubmit={login}>
          <input type='text' placeholder='username' name='username' />
          <input type='submit' value='Login' />
        </form>
      )}
      <br />
      <u>
        <b>Top Scores</b>
      </u>
      {topScores.map((score) => (
        <Score key={score._id} score={score} />
      ))}
    </div>
  );
}
