import React, { useState } from "react";
import "./index.css"
import "./index.js"

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  let counterColor = "green";
  if (count >= 5 && count <= 9) {
    counterColor = "blue";
  } else if (count === 10) {
    counterColor = "red";
  }

  return (
    <div>
      <h1 style={{ color: counterColor }}>{count}</h1>
        <div className="button">
          <button onClick={decrementCount}>Decrement</button>
          <button onClick={incrementCount}>Increment</button>
        </div>
    </div>
  );
}

export default Counter;
