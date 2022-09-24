import React from 'react';
import { createRoot, render } from 'react-dom/client';
import App from './App.jsx';
import { moveShip } from './stars.js';

document.addEventListener('keypress', moveShip);
document.addEventListener('click', moveShip);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
