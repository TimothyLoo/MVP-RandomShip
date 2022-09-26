import React from 'react';
import { shipMult } from '../stars.js';

export default function Ship() {
  return (
    <i
      style={{ top: '350px' }}
      id='ship'
      className={`fa-solid fa-rocket fa-${shipMult}x`}
    />
  );
}
