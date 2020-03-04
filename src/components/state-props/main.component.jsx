import React from "react";

import ShowName from "./show-name.component";
import ChangeName from "./change-name.component";

class StatePropsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "max"
    };
  }

  changeUsername = newName => {
    this.setState({
      username: newName
    });
  };

  render() {
    return (
        <div className="main">
          <ShowName username={this.state.username} />
          <ChangeName changeUsername={this.changeUsername} />
        </div>
    );
  }
}

export default StatePropsMain;
