import React, { useState, useEffect } from 'react';
import { stars } from './stars.js';

export default function Star({ id, spLeft }) {
  const [left, setLeft] = useState(spLeft);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTop((top) => (top += 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (top > 400) stars.shift();

  let ship = document.getElementById('ship');
  if (ship) {
    let shipPos = Number(ship.style.left.slice(0, -2));
    if (
      top === 350 &&
      ((left >= shipPos && left <= shipPos + 16) ||
        (left + 16 <= shipPos + 16 && left + 16 >= shipPos))
    )
      alert('Crash!');
  }

  let starPos = { left: `${left}px`, top: `${top}px` };
  return (
    <i style={starPos} className='fa-solid fa-star star'>
      {top}
    </i>
    // <span style={starPos} className='star'>
    //   {top}
    // </span>
  );
}
