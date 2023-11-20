'use client';

import { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = async () => {
    setCounter(counter + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 min-h-screen space-y-5">
      <h3>Counter</h3>
      <h3 className="text-8xl">{counter}</h3>
      <button type="button" className="bg-blue-600 text-white border-blue-700 rounded-lg py-2 px-4 w-fit shadow-lg" onClick={handleButtonClick}>
        Increase Value
      </button>
    </div>
  );
};
