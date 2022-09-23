import React, { useState, useEffect } from 'react';
import { crashed } from '../stars.js';

export default function Points() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((points) => (points += 1));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  if (crashed) console.log(points);

  return (
    <div id='points'>
      <span>{points} points</span>
    </div>
  );
}
