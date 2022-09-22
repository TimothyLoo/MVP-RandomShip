import React, { useState } from 'react';
import Button from './Button.jsx';
import Ship from './Ship.jsx';
import StarList from './StarList.jsx';

export default function Game() {
  return (
    <div className='game'>
      {console.log('game render')}
      <StarList />
      <Ship />
      <br />
      <Button id='butL' direction='left' />
      <Button id='butR' direction='right' />
    </div>
  );
}
