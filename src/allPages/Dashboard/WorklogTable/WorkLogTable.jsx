/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorkLogTable.css";
import { Pagination } from "@mui/material";


const WorkLogTable = () => {
  const handleChange = (page) => {
    // Handle page change
    console.log("Page changed to:", page);
  };

  const [worklogs, setWorklogs] = useState([]);
  const [error, setError] = useState(null);
  const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch worklogs from the backend when the component mounts
    fetchWorklogs();
  }, []);

  const fetchWorklogs = async () => {
    try {
      // Make a GET request to fetch worklogs from the backend API
      const response = await axios.get("http://localhost:5000/api/worklog/worklogs");

      // Update the state with the fetched worklogs
      setWorklogs(response.data);
    } catch (error) {
      setError("Error fetching worklogs. Please try again later.");
      console.error("Error fetching worklogs:", error);
    }
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const totalPages = Math.ceil(worklogs.length / rowsPerPage);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = worklogs.slice(indexOfFirstRow, indexOfLastRow);

  // Render error message if there's an error
  if (error) {
    return <div className="error-message">{error}</div>;
  }
// const workloglist = worklogs.filter(
//   (worklog)=>
//   worklog.worklog_id.toString().include(searchterm) ||
//   worklog.work.toLowerCase().include(searchterm.toLowerCase())
// )

  return (
    <table className="table-container">
      <thead>
        <tr className="table-row table-header">
          <th className="table-cell">WorkLog ID</th>
          <th className="table-cell">Faculty ID</th>
          <th className="table-cell">Work</th>
          <th className="table-cell">From Time</th>
          <th className="table-cell">To Time</th>
          <th className="table-cell">Status</th>
          <th className="table-cell">View</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(worklogs) && worklogs.length > 0 ? (
          currentRows.map((workLog) => (
            <tr className="table-row" key={workLog.worklogId}>
              <td className="table-cell">{workLog.worklog_id}</td>
              <td className="table-cell">{workLog.faculty_id}</td>
              <td className="table-cell">{workLog.work}</td>
              <td className="table-cell">{workLog.from_time}</td>
              <td className="table-cell">{workLog.to_time}</td>
              <td className="table-cell">{workLog.status}</td>
              <td className="table-cell">
                <button className="view-button">View</button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="table-row">
            <td className="table-cell" colSpan="7">
              No entries until now
            </td>
          </tr>
        )}
      </tbody>
      <tfoot
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "space-around",
        }}
      >
        <Pagination
          count={10}
          variant="string"
          color="primary"
          onChange={(event, page) => handleChange(page)}
        />
      </tfoot>
    </table>
  );
};

export default WorkLogTable;
