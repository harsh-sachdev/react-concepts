import React from "react";
import { Switch, Route } from "react-router-dom";

import LifeCycle from "./components/lifecycle/lifecycle.component";
import Header from "./components/header/header.component";
import HomePage from "./components/homepage/homepage.component";
import ListRepeat from "./components/listrepeat/listrepeat.component";
import NestedRouting from "./components/nested-routing/nested-routing.component";
import ReduxMain from "./components/redux-component/redux-main.component";
import StatePropsMain from "./components/state-props/main.component";
import SpinnerHOC from "./components/spinner-hoc/spinner-hoc.component";
import ReduxThunk from "./components/redux-thunk/redux-thunk.component";
import Form from "./components/form/form.component";
import ReduxSaga from "./components/redux-saga/redux-saga.component";
import Hook from "./components/hooks/hooks.component";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/lifecycle" component={LifeCycle} />
          <Route path="/listrepeat" component={ListRepeat} />
          <Route path="/form" component={Form} />
          <Route path="/nestedrouting" component={NestedRouting} />
          <Route path="/redux" component={ReduxMain} />
          <Route path="/state_props" component={StatePropsMain} />
          <Route path="/spinner" component={SpinnerHOC} />
          <Route path="/thunk" component={ReduxThunk} />
          <Route path="/saga" component={ReduxSaga} />
          <Route path="/hooks" component={Hook} />
        </Switch>
      </div>
    );
  }
}

export default App;
