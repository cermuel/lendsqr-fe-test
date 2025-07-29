import React from "react";
import "../../styles/components/paginator.scss";

interface PaginatorProps {
  totalEntries: number;
  entriesPerPage: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  onChangeEntriesPerPage: (value: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  totalEntries,
  entriesPerPage,
  currentPage,
  onChangePage,
  onChangeEntriesPerPage,
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const renderPages = () => {
    const isSmallScreen =
      typeof window !== "undefined" && window.innerWidth < 640;

    const pages: (number | "...")[] = [];

    if (isSmallScreen) {
      pages.push(1, 2);
      if (totalPages > 3) {
        pages.push("...");
        pages.push(totalPages);
      }
    } else {
      pages.push(1, 2, 3);
      if (totalPages > 5) {
        pages.push("...");
      }
      if (totalPages > 4) {
        pages.push(totalPages - 1, totalPages);
      }
    }

    return pages.map((item, idx) =>
      item === "..." ? (
        <span key={`dots-${idx}`} className="px-2 text-gray-500">
          ...
        </span>
      ) : (
        <button
          key={item}
          onClick={() => onChangePage(item)}
          className={`page-button ${item === currentPage ? "active" : ""}`}
        >
          {item}
        </button>
      )
    );
  };

  return (
    <div className="paginator">
      <div className="entries-control">
        <span className="entries-label">Showing</span>
        <select
          value={entriesPerPage}
          onChange={(e) => onChangeEntriesPerPage(Number(e.target.value))}
          className="entries-select"
        >
          {[10, 25, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span>out of {totalEntries}</span>
      </div>

      <div className="pagination-controls">
        <button
          onClick={() => onChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="arrow-button"
        >
          &lt;
        </button>
        {renderPages()}
        <button
          onClick={() => onChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="arrow-button"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Paginator;
