import React, { useState } from 'react';

const UseStateObject = () => {
  const [userObject, setUserObject] = useState({
    userName: 'Anonymous',
    userAge: 22,
    userDegree: 'BCA',
  });

  const updateName = () => {
    setUserObject({ ...userObject, userName: 'Ritik Sharma' });
  };

  return (
    <div>
      <h1>
        Name: {userObject.userName} & Age: {userObject.userAge} & Degree:{' '}
        {userObject.userDegree}
      </h1>
      <button onClick={updateName}>Update</button>
    </div>
  );
};

export default UseStateObject;
