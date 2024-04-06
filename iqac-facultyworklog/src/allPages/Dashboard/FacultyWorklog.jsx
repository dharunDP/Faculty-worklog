import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/button";
import "./FacultyWorklog.css";

const FacultyWorklogForm = () => {
  const [formData, setFormData] = useState({
    selectedSkill: "",
    selectedDate: null,
    workLogs: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleWorkChange = (e, index) => {
    const { name, value } = e.target;
    const newWorkLogs = [...formData.workLogs];
    newWorkLogs[index][name] = value;
    setFormData({ ...formData, workLogs: newWorkLogs });
  };

  const handleCreateLog = () => {
    if (formData.workLogs.length < 3) {
      setFormData({
        ...formData,
        workLogs: [...formData.workLogs, { work: "", session: "", hours: "" }],
      });
    } else {
      alert("Maximum worklogs reached for the day.");
    }
  };

  const handleRemoveLog = (index) => {
    const newWorkLogs = [...formData.workLogs];
    newWorkLogs.splice(index, 1);
    setFormData({ ...formData, workLogs: newWorkLogs });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/worklogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, maybe show a success message or redirect
        console.log("Worklog created successfully");
      } else {
        // Handle error, maybe show an error message
        console.error("Failed to create worklog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="entire-form">
        <h1>Faculty WorkLog</h1>
        <div className="input-box-1">
          <div className="input-container">
            <label className="input-label">Faculty</label>
          </div>
          <div className="input-container">
            <label className="input-label">Log for</label>
            <select
              className="input"
              name="selectedSkill"
              value={formData.selectedSkill}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Skill</option>
              {["In Campus", "Onduty", "Leave"].map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          <div className="input-container">
            <label className="input-label" style={{ marginRight: "10px" }}>
              Date
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: "100%" }}
                slotProps={{ textField: { size: "small" } }}
                label="Date"
                value={formData.selectedDate}
                onChange={handleDateChange}
                TextFieldProps={{
                  inputProps: {
                    style: { background: "white" },
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Button
              className="addlog"
              onClick={handleCreateLog}
              label="Add log"
            />
          </div>

          {formData.workLogs.map((log, index) => (
            <div key={index} className="workLogForm">
              <h2 style={{ display: "flex", justifyContent: "space-between" }}>
                WorkLog {index + 1}{" "}
                <div className="icons">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="faTrashCan"
                    onClick={() => handleRemoveLog(index)}
                  />
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className="faSquarePlus"
                    onClick={handleCreateLog}
                  />
                </div>
              </h2>

              <div style={{ padding: "20px 20px 20px 20px" }}>
                <div className="input-container">
                  <label className="input-label">Work</label>
                  <select
                    className="input"
                    name="work"
                    value={log.work}
                    onChange={(e) => handleWorkChange(e, index)}
                    required
                  >
                    <option value="">Select Work</option>
                    {[
                      "Teaching",
                      "Research",
                      "Administrative",
                      "Other Work",
                    ].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-container">
                  <label
                    className="input-label"
                    style={{ marginRight: "10px" }}
                  >
                    Time
                  </label>
                  <div style={{ flex: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <TimePicker
                          sx={{ width: "100%" }}
                          slotProps={{ textField: { size: "small" } }}
                          label="Time"
                          TextFieldProps={{
                            sx: { background: "white" },
                          }}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="input-container">
                  <label className="input-label">No of Hours</label>
                  <select
                    className="input"
                    name="hours"
                    value={log.hours}
                    onChange={(e) => handleWorkChange(e, index)}
                    required
                  >
                    <option value="">Select No of Hours</option>
                    {["1 hour", "2 hours", "3 hours", "4 hours", "5 hours"].map(
                      (option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>
          ))}
          <div className="Buttons">
            {formData.workLogs.length > 0 && (
              <Button
                className="submitworklog"
                type="submit"
                label="Create Worklog"
              />
            )}
            {formData.workLogs.length > 0 && (
              <Button label="Add another" onClick={handleCreateLog} />
            )}
            {formData.workLogs.length > 0 && (
              <Button
                label="Cancel"
                onClick={() => handleRemoveLog(index)}
              />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FacultyWorklogForm;
