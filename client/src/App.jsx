import React, { useState, useEffect } from 'react';
import Game from './game/Game.jsx';
import StartPage from './StartPage.jsx';
import { crashed } from './stars.js';

export const GameState = React.createContext();

export default function App() {
  const [appSt, setAppSt] = useState('start');

  return (
    <>
      <GameState.Provider value={setAppSt}>
        {appSt === 'start' ? <StartPage /> : <Game />}
      </GameState.Provider>
    </>
  );
}
