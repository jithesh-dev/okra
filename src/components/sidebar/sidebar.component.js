import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.styles.scss";

import reportIcon from "../../assets/reports-icon.png";
import suggestionsIcon from "../../assets/suggestions-icon.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__navContainer">
        <li className="sidebar__navLink">
          <Link to="/" className="active">
            <img src={suggestionsIcon} alt="" className="sidebar__navIcon" />
            <span className="sidebar__navLinktext">Suggestions</span>
          </Link>
        </li>
        <li className="sidebar__navLink">
          <Link to="/reports">
            <img src={reportIcon} alt="" className="sidebar__navIcon" />
            <span className="sidebar__navLinktext">Reports</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
