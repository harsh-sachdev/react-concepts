import React from "react";

const mystyle = {
  margin: "50px",
  border: "1px dotted black",
  padding: "20px"
};

const CountUp = props => {
  return (
    <div className="count-up" style={mystyle}>
      <button onClick={() => props.inCount()}>+++</button>
    </div>
  );
};

export default CountUp;
