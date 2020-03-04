import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lifecycle">Life Cycle</Link>
          </li>
          <li>
            <Link to="/listrepeat">List Repeat</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/nestedrouting">Nested Routing</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/state_props">State & Props</Link>
          </li>
          <li>
            <Link to="/spinner">Spinner</Link>
          </li>
          <li>
            <Link to="/thunk">Thunk</Link>
          </li>
          <li>
            <Link to="/saga">Saga</Link>
          </li>
          <li>
            <Link to="/hooks">Hook</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
