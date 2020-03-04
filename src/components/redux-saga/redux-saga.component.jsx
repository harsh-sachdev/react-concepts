import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import ShowName from "./show-name.component";
import ChangeName from "./change-name.component";

class ReduxSaga extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="redux-main">
          <ShowName />
          <ChangeName changeUsername={this.changeUsername} />
        </div>
      </Provider>
    );
  }
}

export default ReduxSaga;
