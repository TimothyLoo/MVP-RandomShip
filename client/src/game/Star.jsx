import React, { useState, useEffect, useContext } from 'react';
import { stars, crashed, shipMult, starMult } from '../stars.js';
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
    let shipL = Number(ship.style.left.slice(0, -2));
    let shipR = shipL + 16 * shipMult;
    let shipT = 350;
    let shipB = 350 + 16 * shipMult;
    let starL = left;
    let starR = left + 16 * starMult;
    let starT = top;
    let starB = top + 16 * starMult;
    if (
      shipT <= starB &&
      starT <= shipB &&
      ((starL >= shipL && starL <= shipR) || (starR <= shipR && starR >= shipL))
    ) {
      stars.length = 0;
      crashed = true;
      alert('Crashed!');
    }
  }

  if (top > 430) stars.shift();

  let starPos = { left: `${left}px`, top: `${top}px` };
  return (
    <i style={starPos} className={`fa-solid fa-star star fa-${starMult}x`} />
  );
}
