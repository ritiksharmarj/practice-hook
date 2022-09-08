import React, { useEffect, useState } from 'react';

const UseEffectOne = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // The document.title property gets or sets the current title of the document.
    counter != 0
      ? (document.title = `Counter (${counter})`)
      : (document.title = 'Counter');
  });

  return (
    <div>
      <h1>{counter}</h1>
      <button className='btn' onClick={() => setCounter(counter + 1)}>
        Count 🚀
      </button>
    </div>
  );
};

export default UseEffectOne;
