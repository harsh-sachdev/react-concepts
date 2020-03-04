import React from "react";

const VegetableDetails = ({ match }) => (
  <div>
    <h3>Hey! I am {`${match.params.vegName}`}</h3>
  </div>
);

export default VegetableDetails;
