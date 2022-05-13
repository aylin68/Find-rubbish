import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="nav-menu">
        <li>
          <Link to="/">home</Link>
        </li>

        <li>
          <Link to="/addlocation">Add Location</Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
