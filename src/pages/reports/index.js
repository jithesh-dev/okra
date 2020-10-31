import React from "react";
import "./reports.styles.scss";

import GetAppIcon from "@material-ui/icons/GetApp";
import SalesQuarter from "../../components/charts/sales-quater";

const ReportsPage = () => {
  return (
    <div className="reports">
      <h1 className="reports__title">Your Performance</h1>
      <h4 className="reports__subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum
        fugit officia sapiente sit nostrum similique dolor, modi velit quam!
      </h4>
      <div className="reports__header">
        <div className="header__filter">
          <div className="formControl">
            <select name="">
              <option value="">Period</option>
            </select>
          </div>
          <div className="formControl">
            <select name="">
              <option value="">Measure</option>
            </select>
          </div>
        </div>
        <div className="header__actions">
          <p>Updated: 12.9</p>
          <button className="btn-icn">
            <GetAppIcon />
          </button>
        </div>
      </div>
      <div className="performance section">
        <h3 className="section__title">Sales Performance</h3>
        <div className="performance__mertricsContainer">
          <SalesQuarter />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
