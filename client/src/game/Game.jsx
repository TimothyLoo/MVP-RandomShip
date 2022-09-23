import React from 'react';
import StarList from './StarList.jsx';
import Ship from './Ship.jsx';
import Button from './Button.jsx';
import Points from './Points.jsx';

export default function Game() {
  return (
    <div className='game'>
      <Points />
      <StarList />
      <Ship />
      <br />
      <Button id='butL' direction='left' />
      <Button id='butR' direction='right' />
    </div>
  );
}
