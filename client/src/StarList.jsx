import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import Star from './Star.jsx';
import { stars } from './stars.js';

export default function StarList() {
  const [starList, setStars] = useState([...stars]);

  const starPos = Math.floor(Math.random() * 780);
  useEffect(() => {
    const interval = setInterval(() => {
      stars.push(uuidv4());
      setStars([...stars]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {starList.map((star) => (
        <Star key={star} id={star} spLeft={starPos} />
      ))}
    </>
  );
}
