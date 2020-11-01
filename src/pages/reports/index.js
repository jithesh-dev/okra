import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./reports.styles.scss";

import AdheranceChart from "../../components/charts/adherance-chart";
import SalesQuarter from "../../components/charts/sales-quater";
import SalesRegionalNational from "../../components/charts/sales-regional-national";
import VolumeChart from "../../components/charts/volume-chart";

const ReportsPage = () => {
  return (
    <div className="reports">
      <h1 className="page__title">Your Performance</h1>
      <h4 className="page__subtitle">
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

        <div className="section__mertricsContainer">
          <SalesQuarter />

          <SalesRegionalNational className="performance__comparisonChart" />
        </div>
      </div>
      <div className="adherence section">
        <h3 className="section__title">Adherence</h3>

        <div className="section__mertricsContainer">
          <AdheranceChart />
          <VolumeChart />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
