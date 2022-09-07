import React, { useState } from 'react';

const Challenge2 = () => {
  const toDoArr = [
    {
      id: 11,
      userName: 'Ritik',
      userAge: 22,
    },
    {
      id: 22,
      userName: 'Neha',
      userAge: 21,
    },
  ];

  // Clear ToDo list using useState hook
  const [toDoValue, setToDoValue] = useState(toDoArr);
  const clearToDo = () => {
    setToDoValue([]);
  };

  // Remove each todo list
  const removeList = (id) => {
    const toDoFilterValue = toDoValue.filter((item) => {
      return item.id !== id;
    });

    setToDoValue(toDoFilterValue);
  };

  return (
    <>
      {toDoValue.map((item) => {
        return (
          <div className='todo-list' key={item.id}>
            <h1>
              Name: {item.userName} & Age: {item.userAge}
            </h1>
            <button className='button-45' onClick={() => removeList(item.id)}>
              Remove
            </button>
          </div>
        );
      })}

      <button className='btn' onClick={clearToDo}>
        Clear ToDo
      </button>
    </>
  );
};

export default Challenge2;
