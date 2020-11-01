import React from "react";
import "./pagination.style.scss";
const Pagination = ({ rowsPerPage, totalRows, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination btn__container">
        {pageNumbers.map((number) => (
          //   <span className="page-item btn-icn">
          <button
            onClick={() => paginate(number)}
            key={number}
            className={`page-link btn-icn ${
              currentPage === number ? "active" : ""
            }`}
          >
            {number}
          </button>
          //   </span>
        ))}
      </div>
    </nav>
  );
};

export default Pagination;
