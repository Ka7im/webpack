import React, { useState } from 'react';
import './App.scss'

export const App = () => {
  const [count, setCount] = useState(0)

  const handleCounter = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      {count}
      <button className='button' onClick={handleCounter}>увеличить</button>
    </div>
  );
};
