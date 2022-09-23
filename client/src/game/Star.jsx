import React, { useState, useEffect, useContext } from 'react';
import { stars, crashed } from '../stars.js';
import { GameState } from '../App.jsx';

export default function Star({ id, spLeft }) {
  const [left, setLeft] = useState(spLeft);
  const [top, setTop] = useState(0);

  const setAppSt = useContext(GameState);

  useEffect(() => {
    if (crashed) setAppSt('start');
    const interval = setInterval(() => {
      setTop((top) => (top += 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  let ship = document.getElementById('ship');
  if (ship) {
    let shipPos = Number(ship.style.left.slice(0, -2));
    if (
      top >= 350 &&
      top <= 350 + 16 &&
      ((left >= shipPos && left <= shipPos + 16) ||
        (left + 16 <= shipPos + 16 && left + 16 >= shipPos))
    ) {
      stars.length = 0;
      crashed = true;
      alert('Crashed!');
    }
  }

  if (top > 430) stars.shift();

  let starPos = { left: `${left}px`, top: `${top}px` };
  return <i style={starPos} className='fa-solid fa-star star' />;
}
