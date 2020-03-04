import React, { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div>
      <button onClick={() => increment()}>Click me! {count}</button>
    </div>
  );
};

export default Hook;
