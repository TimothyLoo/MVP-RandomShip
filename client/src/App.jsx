import React from 'react';
import Game from './Game.jsx';

export default function App() {
  return (
    <>
      <div className='header'>
        <div className=' headIc'>
          <i className='fa-solid fa-rocket fa-rotate-270' />
        </div>
        <h1>Random Ship</h1>
        <div className=' headIc'>
          <i className='fa-solid fa-rocket headIc' />
        </div>
      </div>
      <Game />
    </>
  );
}
