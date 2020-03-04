import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

const ChangeName = ({ setCurrentUser }) => (
  <div className="change-name">
    <button onClick={() => setCurrentUser("Toras")}>Change Name</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(ChangeName);
