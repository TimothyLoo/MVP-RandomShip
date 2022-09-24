import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { crashed, username } from '../stars.js';

export default function Points() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((points) => (points += 1));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  if (crashed) {
    axios
      .post('/topScores', { username: username || 'guest', score: points })
      .catch((err) => console.log(err));
  }

  return (
    <div id='points'>
      <span>{points} points</span>
    </div>
  );
}
