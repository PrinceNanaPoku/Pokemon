
import React from "react";

function PageSizeSelector({ pageSize, onPageSizeChange }) {
  return (
    <div>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(parseInt(e.target.value))}
        className="px-2 py-1 border border-gray-300 rounded-md"
      >
        <option value={8}>8</option>
        <option value={12}>12</option>
        <option value={16}>16</option>
        <option value={24}>24</option>
      </select>
    </div>
  );
}

export default PageSizeSelector;
