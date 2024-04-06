/* eslint-disable no-unused-vars */
// WorkLogPanel.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkLogTable from "../WorklogTable/WorkLogTable";
import Button from "../../../components/Button/button";
import InputBox from "../../../components/InputBox/inputbox";
import "./WorkLogPanel.css";

const WorkLogPanel = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [workLogs, setWorkLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  // Function to handle creating a work log
  const handleCreateWorkLog = () => {
    navigate("/facultyworklog");
    // Implement logic to create a new work log
    // You might want to open a modal or navigate to a new page for the creation form
  };

  // Function to handle searching work logs
  const handleSearchWorkLogs = (searchTerm) => {
    // Implement logic to fetch work logs based on the search term
    // Update the workLogs state accordingly
  };

  return (
    <div className="log-container">
      <h1>Faculty WorkLog</h1>

      <div className="first-line" style={{ justifyContent: "space-between" }}>
        <div className="searcher" style={{ display: "flex" }}>
          <InputBox
            type="text"
            placeholder="Search work logs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <Button
            onClick={handleSearchWorkLogs}
            className="search-button"
            disabled={!searchTerm}
            label="Search"
          ></Button>
        </div>
        <Button
          onClick={handleCreateWorkLog}
          className="create-button"
          label="Create"
          style={{ marginLeft: "auto" }}
        ></Button>
      </div>
      <div className="worklog-container">
        <WorkLogTable workLogs={workLogs} />
      </div>
    </div>
  );
};

export default WorkLogPanel;
