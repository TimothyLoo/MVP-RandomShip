import React from 'react';

export default function Ship() {
  const moveShip = (e) => {
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
    // <span style={{ top: '350px' }} id='ship'>
    //   ship
    // </span>
    <i style={{ top: '350px' }} id='ship' className='fa-solid fa-rocket'></i>
  );
}
