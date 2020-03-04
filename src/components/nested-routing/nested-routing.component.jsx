import React from "react";
import { Link, Route } from "react-router-dom";
import Fruit from "./fruits.component";
import Vegetables from "./vegetables.component";

const NestedRouting = ({ match }) => {
  console.log(match);
  return (
    <div className="nested-routing">
      <div
        className="sidebar"
        style={{
          border: "1px solid black",
          padding: "20px"
        }}
      >
        <Link to={`${match.url}/fruits`}>
          <h4>Fruits</h4>
        </Link>
        <Link to={`${match.url}/vegetables`}>
          <h4>Vegetables</h4>
        </Link>
      </div>
      <h3>I am nested routing parent component</h3>
      <Route exact path={`${match.path}/fruits`} component={Fruit} />
      <Route path={`${match.path}/vegetables`} component={Vegetables} />
    </div>
  );
};

export default NestedRouting;
