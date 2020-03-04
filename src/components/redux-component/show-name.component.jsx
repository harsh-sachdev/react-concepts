import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

const ShowName = ({ username }) => (
  <div className="show-name">
    <p>USERNAME IS :{username} </p>
  </div>
);

// const mapStateToProps = state => ({
//   username: state.user.currentUser
// });

const mapStateToProps = createStructuredSelector({
  username: selectCurrentUser
});

export default connect(mapStateToProps)(ShowName);
