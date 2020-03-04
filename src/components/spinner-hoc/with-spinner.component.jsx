import React from "react";
import "./spinner.styles.scss";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  console.log(isLoading ,' >><<<<<><<><><><')
  return isLoading ? (
    <div>
      <h3>Your component is loading ...</h3>
      <div className="loading">Loading&#8230;</div>
    </div>
    
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
