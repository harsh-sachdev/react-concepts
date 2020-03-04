import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import ShowName from "./show-name.component";
import ChangeName from "./change-name.component";

class ReduxThunk extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="redux-main">
          <h2>I am Redux Thunk Example</h2>
          <ShowName />
          <ChangeName changeUsername={this.changeUsername} />
        </div>
      </Provider>
    );
  }
}

export default ReduxThunk;
