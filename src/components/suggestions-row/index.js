import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SuggestionsRow({
  priority,
  contact,
  suggestion,
  revenue,
  access,
  target,
  reason,
}) {
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{priority}</td>
        <td>{contact}</td>
        <td>{suggestion}</td>
        <td></td>
        <td>{revenue}</td>
        <td>{access}</td>
        <td>{target}</td>
        <td>
          <ExpandMoreIcon className="expand-btn" />
        </td>
      </tr>
      <tr>
        <td colSpan="2"></td>
        <td colSpan="7">{reason}</td>
      </tr>
    </>
  );
}

export default SuggestionsRow;
