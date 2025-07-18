import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div className="p-8">
      {val.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        onClick={() =>
          setVal(() => {
            return val.filter((item, index) => item%2 !== 0);
          })
        }
        className="px-3 py-1 bg-blue-500 rounded-full text-white cursor-pointer"
      >
        delete
      </button>
    </div>
  );
};

export default App;
