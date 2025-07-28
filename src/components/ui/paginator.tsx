import React from "react";

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
          className={`px-1 text-[#545F7D] cursor-pointer rounded-md ${
            item === currentPage ? "font-medium" : ""
          }`}
        >
          {item}
        </button>
      )
    );
  };

  return (
    <div className="flex justify-between items-center text-sm text-gray-700 mt-0">
      <div className="flex items-center gap-2">
        <span className="max-sm:hidden">Showing</span>
        <select
          value={entriesPerPage}
          onChange={(e) => onChangeEntriesPerPage(Number(e.target.value))}
          className="h-[30px] cursor-pointer w-[80px] flex items-center outline-none justify-between px-2 bg-[#213F7D1A] rounded-[4px] border text-sm border-gray-300 text-[#213F7D] font-medium"
        >
          {[10, 25, 50, 100].map((num) => (
            <option key={num} value={num}>
              <span> {num}</span>

              <img
                src="/icons/down-colored.svg"
                className="w-2 h-2 border-2 mr-2"
                alt="down icon"
              />
            </option>
          ))}
        </select>
        <span>out of {totalEntries}</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-6 h-6 bg-[#213F7D1A] cursor-pointer hover:bg-blue-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &lt;
        </button>
        {renderPages()}
        <button
          onClick={() => onChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-6 h-6 bg-[#213F7D1A] cursor-pointer hover:bg-blue-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Paginator;
