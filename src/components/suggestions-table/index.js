import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";

import "./suggestionsTable.styles.scss";
import SuggestionsRow from "../suggestions-row";
import Pagination from "../pagination";

const priority = {
  High: 5,
  Mig: 4,
  Mid: 3,
  Low: 1,
};

function SuggestionsTable({ data }) {
  const [rows, setRows] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  // Get current rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rows.slice(indexOfFirstRow, indexOfLastRow);
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <table className="suggestionsTable">
        <thead>
          <tr>
            <td align="center">
              <CancelIcon />
            </td>
            <td align="center">Priority</td>
            <td>Contact</td>
            <td>Suggestion</td>
            <td align="center">Target</td>
            <td align="center">Messaging</td>
            <td align="center">Earning Potential</td>
            <td>Access</td>

            <td>Why?</td>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((item) => (
            <SuggestionsRow
              key={item["index"]}
              priority={priority[item["Priority"]]}
              contact={item["Contact"]}
              suggestion={item["Suggestion"]}
              revenue={item["Potential revenue"]}
              access={item["Access"]}
              target={item["Target?"]}
              reason={item["Reason"]}
              messaging={item["Messaging"]}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        rowsPerPage={rowsPerPage}
        totalRows={rows.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

export default SuggestionsTable;
