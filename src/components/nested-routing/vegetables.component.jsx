import React from "react";
import { Route, Link } from "react-router-dom";
import VegetableDetails from "./vegetableDetails.component";

const Vegetables = ({ match }) => {
  const vegies = ["broccoli", "corn", "cucumber", "lettuce", "pumpkin"];
  return (
    <div className="vegetables">
      <div className="list">
        <ul>
          {vegies.map((vegy, index) => (
            <li key={index}>
              <Link to={`${match.url}/${vegy}`}>
                {" "}
                <h4>{vegy} </h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Route path={`${match.path}/:vegName`} component={VegetableDetails} />
    </div>
  );
};

export default Vegetables;
