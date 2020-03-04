import React from "react";

import CountUp from "./count-up.component";
import CountDown from "./count-down.component";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  inCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  dcCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="outer">
        <span>{this.state.count}</span>
        <br />
        <button
          onClick={() => {
            this.setState({ count: 0 });
          }}
        >
          Reset
        </button>
        <CountUp inCount={this.inCount}></CountUp>
        <CountDown dcCount={this.dcCount} count={this.state.count}></CountDown>
      </div>
    );
  }
}

export default LifeCycle;
