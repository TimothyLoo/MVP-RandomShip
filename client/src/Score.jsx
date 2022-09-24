import React from 'react';
// import { crashed } from './stars.js';

export default function Score({ score }) {
  return (
    <div className='score'>
      <b>
        {score.username}: {score.score}
      </b>
    </div>
  );
}
