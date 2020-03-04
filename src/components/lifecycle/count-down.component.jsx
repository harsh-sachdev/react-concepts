import React from "react";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor.............", this.props);
    this.state = {
      fruit: "apple",
      mycount: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerviedStateFromProps...........", props, state);
    return { mycount: props.count + 10 };
  }

  render() {
    console.log("Render....", this.props, this.state);
    const mystyle = {
      margin: "50px",
      border: "1px dotted black",
      padding: "20px"
    };
    return (
      <div style={mystyle}>
        Fruit = {this.state.fruit} <br />
        count + 10 = {this.state.mycount} <br />
        <button onClick={() => this.props.dcCount()}>---</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount.............");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    this.setState({ fruit: "papaya" });
    setTimeout(() => {
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      this.setState({ fruit: "banana" });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log(this.props.count, "  === ");
    console.log(
      "shouldComponentUpdate............",
      nextProps,
      nextState,
      this.state
    );
    if (nextState.fruit !== this.state.fruit) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, state) {
    console.log("getSnapshotBeforeUpdate.............", prevProps, state);
    return {};
  }

  componentDidUpdate() {
    console.log("componentDidUpdate.................");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount...................");
  }
}

export default CountDown;
