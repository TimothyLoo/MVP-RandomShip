import React, { useContext } from 'react';
import { crashed } from './stars.js';
import { GameState } from './App.jsx';

export default function StartPage() {
  const setAppSt = useContext(GameState);

  return (
    <div className='start'>
      <button
        onClick={() => {
          setAppSt('game');
          crashed = false;
        }}>
        Start Game
      </button>
    </div>
  );
}
