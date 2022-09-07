import React, { useState } from 'react';

const UseStateArray = () => {
  const bioData = [
    {
      id: 121,
      userName: 'Ritik Sharma',
      userAge: 22,
    },
    {
      id: 131,
      userName: 'Poonam Pandey',
      userAge: 20,
    },
  ];

  const [bioDataArray, setBioDataArray] = useState(bioData);

  const clearArray = () => {
    setBioDataArray([]);
  };

  return (
    <>
      {bioDataArray.map((item) => {
        return (
          <h1 key={item.id}>
            Name: {item.userName} & Age: {item.userAge}
          </h1>
        );
      })}

      <button onClick={clearArray}>clear</button>
    </>
  );
};

export default UseStateArray;
