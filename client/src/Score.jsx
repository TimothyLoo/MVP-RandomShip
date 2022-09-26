import React from 'react';

export default function Score({ score }) {
  return (
    <div className='score'>
      <b>{score.username}</b>
      <b>{score.score}</b>
    </div>
  );
}
