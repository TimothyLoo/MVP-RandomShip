import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { crashed, username } from './stars.js';
import { GameState } from './App.jsx';
import Score from './Score.jsx';

export default function StartPage() {
  const [topScores, setTopScores] = useState([]);
  const [userTopScores, setUserTopScores] = useState([]);
  const [user, setUser] = useState(username);

  const setAppSt = useContext(GameState);

  useEffect(() => {
    axios
      .get('/topScores')
      .then(({ data }) => setTopScores(data))
      .catch((err) => console.log(err));
    axios
      .get(`/userTopScores/${username}`)
      .then(({ data }) => setUserTopScores(data))
      .catch((err) => console.log(err));
  }, []);

  const login = (e) => {
    e.preventDefault();
    let u = e.target.elements.username.value;
    if (u.length) {
      username = u;
      axios
        .get(`/userTopScores/${username}`)
        .then(({ data }) => setUserTopScores(data))
        .catch((err) => console.log(err));
      setUser(username);
    }
  };

  return (
    <div className='start'>
      <span>Use the 'left' button or 'J' key to move left.</span>
      <span>Use the 'right' button or 'L' key to move right.</span>
      <span>Avoid the stars. Don't Crash.</span>
      <br />
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
      <div className='scores'>
        {user ? (
          <div>
            <u>
              <b>{user}'s Top Scores</b>
            </u>
            {userTopScores.map((score) => (
              <Score key={score._id} score={score} />
            ))}
          </div>
        ) : null}
        <div>
          <u>
            <b>Top Scores</b>
          </u>
          {topScores.map((score) => (
            <Score key={score._id} score={score} />
          ))}
        </div>
      </div>
    </div>
  );
}
