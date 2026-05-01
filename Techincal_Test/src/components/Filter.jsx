import React from "react";

function Filter({ filterText, setFilterText }) {
  return (
    <input
      className="filter-input"
         placeholder="Search Data ..."
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
  );
}

export default Filter;