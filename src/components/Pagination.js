
import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-between mt-4">
      <div>
        <button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 bg-slate-200 enabled:hover:bg-pink-400 rounded-md mr-2"
        >
          &lt;
        </button>
        <button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 bg-slate-200 enabled:hover:bg-pink-400 rounded-md mr-2"
        >
          1
        </button>
        <button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 bg-slate-200 enabled:hover:bg-pink-400 rounded-md mr-2"
        >
          2
        </button>
        <button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 bg-slate-200 enabled:hover:bg-pink-400 rounded-md mr-2"
        >
          3
        </button>
        <span>...</span>
        <button
          onClick={() =>
            onPageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          className="px-4 py-2 bg-slate-200 enabled:hover:bg-pink-400 rounded-md mr-2"
        >
          12
        </button>
        <button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 bg-slate-200 enabled:hover:bg-pink-400 rounded-md mr-2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
