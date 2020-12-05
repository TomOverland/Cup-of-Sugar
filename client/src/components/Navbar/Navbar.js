// inital created by Nou for skeleton, but will change in future for Alex's sidebar slider

import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => props.handlePageChange("Sign Up")}
          className={
            props.currentPage === "SignUp" ? "nav-link active" : "nav-link"
          }
        >
          Sign Up
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
