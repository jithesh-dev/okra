import React from "react";
import SuggestionsTable from "../../components/suggestions-table";
import "./dashboard.styles.scss";
import { data } from "../../data/recommendations-michael.json";

function Dashboard() {
  console.log(Object.keys(data).length);
  return (
    <div className="dashboard">
      <h1 className="page__title">Your Suggestions</h1>
      <div className="dashboard_header">
        <div className="formControl">
          <select name="">
            <option value="">Sort by: Priority</option>
            <option value="">Sort by: Catagory</option>
            <option value="">Sort by: Revenue</option>
            <option value="">Sort by: Access</option>
          </select>
        </div>
        <div className="dashboard__filterContainer">
          <div className="formControl">
            <select name="">
              <option value="">Catagory</option>
            </select>
          </div>
          <div className="formControl">
            <select name="">
              <option value="">Priority</option>
            </select>
          </div>
          <div className="formControl">
            <select name="">
              <option value="">Predicted Revenue</option>
            </select>
          </div>
          <div className="formControl">
            <select name="">
              <option value="">Access</option>
            </select>
          </div>
          <div className="formControl">
            <select name="">
              <option value="">Target</option>
            </select>
          </div>
        </div>
        <p className="data__counter">
          {data && Object.keys(data).length + " Total"}
        </p>
        <div className="btn__container">
          <button className="btn btn__primary">Print</button>
          <button className="btn btn__primary">Export</button>
        </div>
      </div>
      <SuggestionsTable data={data} />
    </div>
  );
}

export default Dashboard;
