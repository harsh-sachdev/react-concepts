import React from "react";

const ListRepeat = () => {
  const fruits = ["Apple", "Banana", "Orange", "Grapes"];
  return (
    <div className="list-repeat">
      <h3>i will repeat the fruit list {fruits.join(", ")}</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRepeat;
