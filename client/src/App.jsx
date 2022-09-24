import React, { useState, useEffect } from 'react';
import Game from './game/Game.jsx';
import StartPage from './StartPage.jsx';

export const GameState = React.createContext();

export default function App() {
  const [appSt, setAppSt] = useState('start');

  return (
    <>
      <div className='header'>
        <i className='fa-solid fa-rocket fa-rotate-270' />
        <h1>Random Ship</h1>
        <i className='fa-solid fa-rocket headIc' />
      </div>
      <GameState.Provider value={setAppSt}>
        {appSt === 'start' ? <StartPage /> : <Game />}
      </GameState.Provider>
    </>
  );
}
