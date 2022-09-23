import React from 'react';
import App from './App.jsx';
import { crashed } from './stars.js';

export default function Page() {
  const moveShip = (e) => {
    if (crashed) return;
    const ship = document.getElementById('ship');
    let position = Number(ship.style.left.slice(0, -2));

    if (e.key === 'j' || e.target.innerHTML === 'left') {
      if (position < 1) return;
      ship.style.left = `${(position -= 10)}px`;
    }
    if (e.key === 'l' || e.target.innerHTML === 'right') {
      if (position > 770) return;
      ship.style.left = `${(position += 10)}px`;
    }
  };

  document.addEventListener('keypress', moveShip);
  document.addEventListener('click', moveShip);

  return (
    <>
      <div className='header'>
        <i className='fa-solid fa-rocket fa-rotate-270' />
        <h1>Random Ship</h1>
        <i className='fa-solid fa-rocket headIc' />
      </div>
      <App />
    </>
  );
}
