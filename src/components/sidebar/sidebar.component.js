import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.styles.scss";

import reportIcon from "../../assets/reports-icon.png";
import suggestionsIcon from "../../assets/suggestions-icon.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar__navContainer">
        <li className="sidebar__navLink">
          <NavLink to="/" activeClassName="active" exact={true}>
            <img src={suggestionsIcon} alt="" className="sidebar__navIcon" />
            <span className="sidebar__navLinktext">Suggestions</span>
          </NavLink>
        </li>
        <li className="sidebar__navLink">
          <NavLink to="/reports" activeClassName="active">
            <img src={reportIcon} alt="" className="sidebar__navIcon" />
            <span className="sidebar__navLinktext">Reports</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
