import React from "react";
import WithSpinner from "./with-spinner.component";
import { Route } from "react-router-dom";
import ToSpinner from "./to-spinner.component";
const ToSpinnerComponentWithSpinner = WithSpinner(ToSpinner);

class SpinnerHOC extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         loading: true
  //     }
  // }
  //shorthand for define state if no use of constructor
  state = {
    loading: true
  };

  componentDidMount() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <h2>I am a sync component</h2>
        <Route
          path="/"
          render={props => (
            <ToSpinnerComponentWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default SpinnerHOC;
