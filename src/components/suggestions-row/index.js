import React, { useState } from "react";
import "./suggestionsRow.styles.scss";
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className="suggestionsRow">
        <td>
          <input type="checkbox" />
        </td>
        <td>{priority}</td>
        <td>{contact}</td>
        <td>{suggestion}</td>
        <td>{isOpen.toString()}</td>
        <td>{revenue}</td>
        <td>
          <span className={`access ${access}`}>{access}</span>
        </td>
        <td>{target}</td>
        <td>
          <span className="expand-btn ">
            <ExpandMoreIcon
              className={`${isOpen && "reverse"}`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </span>
        </td>
      </tr>

      <tr className={`reasonRow ${isOpen && "active"}`}>
        <td colSpan="2"></td>
        <td colSpan="7">
          <div className={`reasonText ${isOpen && "active"}`}>{reason}</div>
        </td>
      </tr>
    </>
  );
}

export default SuggestionsRow;
