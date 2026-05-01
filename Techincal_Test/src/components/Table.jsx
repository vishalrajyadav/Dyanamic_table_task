import React, { useState, useMemo } from "react";
import "./Table.css";

function Table({ data }) {
  const [sortKey, setSortKey] = useState(null);
    const [direction, setDirection] = useState("asc");

  const handleSort = (key) => {
    if (sortKey === key) {
      setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
         } else {
          setSortKey(key);
        setDirection("asc");
                }
  };

  
  const sortedData = useMemo(() => {
    if (!sortKey) return data;

     return [...data].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return direction === "asc" ? -1 : 1;

      if (a[sortKey] > b[sortKey]) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, direction]);

  return (
     <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>ID</th>
           <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("age")}>Age</th> 

             <th onClick={() => handleSort("city")}>City</th>
        </tr>
      </thead>

      <tbody>
         
         {sortedData.length === 0 ? (
          <tr>
            <td colSpan="4">No data found</td>
          </tr>
        ) : (
          sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;