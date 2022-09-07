import React, { useState } from 'react';

const ShortCirEval = () => {
  const [options, setOptions] = useState('Hola Ritik');

  return (
    <div>
      <h1> {options || 'Ritik Sharma'}</h1>
      <h1> {options && 'Ritik Sharma'}</h1>
    </div>
  );
};

export default ShortCirEval;
