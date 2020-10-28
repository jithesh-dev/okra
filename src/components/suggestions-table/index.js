import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./suggestionsTable.styles.scss";

const priority = {
  High: 5,
  Mig: 4,
  Mid: 3,
  Low: 1,
};

function SuggestionsTable({ data }) {
  return (
    <table className="suggestionsTable">
      <thead>
        <tr>
          <td>
            <CancelIcon />
          </td>
          <td>Priority</td>
          <td>Contact</td>
          <td>Suggestion</td>
          <td>Confidence</td>
          <td>Earning Potential</td>
          <td>Access</td>
          <td>Target Status</td>
          <td>Why?</td>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <React.Fragment key={item["index"]}>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>{priority[item["Priority"]]}</td>
              <td>{item["Contact"]}</td>
              <td>{item["Suggestion"]}</td>
              <td></td>
              <td>{item["Potential revenue"]}</td>
              <td>{item["Access"]}</td>
              <td>{item["Target?"]}</td>
              <td>
                <ExpandMoreIcon className="expand-btn" />
              </td>
            </tr>
            {/* <tr>
              <td colSpan="2"></td>
              <td colSpan="7">{item["Reason"]}</td>
            </tr> */}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default SuggestionsTable;
