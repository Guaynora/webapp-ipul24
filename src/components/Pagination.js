import React from "react";

function Pagination({ currentPage, count, onChangePage, postPerPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(count / postPerPage); i++) {
    pages.push(i);
  }

  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];

  return (
    <nav
      className="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      {currentPage > firstPage && (
        <a
          className="pagination-previous"
          onClick={() => onChangePage(currentPage - 1)}
        >
          Antes
        </a>
      )}

      {currentPage !== lastPage && (
        <a
          className="pagination-next"
          onClick={() => onChangePage(currentPage + 1)}
        >
          Siguiente
        </a>
      )}

      <ul className="pagination-list">
        {pages.map((page, index) => {
          return (
            <li key={index} onClick={() => onChangePage(page)}>
              <a
                className={
                  page === currentPage
                    ? "pagination-link is-current"
                    : "pagination-link"
                }
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
