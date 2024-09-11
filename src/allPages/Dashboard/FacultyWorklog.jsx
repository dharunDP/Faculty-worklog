import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/button";
import "./FacultyWorklog.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import Select from "react-select"; // Import React Select

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

  const handleWorkChange = (newValue, index) => {
    const newWorkLogs = [...formData.workLogs];
    newWorkLogs[index].work = newValue.value;
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
        <div>
          <h1>Faculty WorkLog</h1>
        </div>

        <div className="input-box-1">
          <div className="input-container">
            <label className="input-label">Faculty</label>

            <input
              type="text"
              style={{
                width: "100%",
                padding: "10px 10px",
                borderRadius: "5px",
              }}
              readOnly
            />
          </div>
          <div className="input-container">
            <label className="input-label">Log for</label>
            <div className="date">
              <Select
                className="input"
                options={[
                  { value: "In Campus", label: "In Campus" },
                  { value: "Onduty", label: "Onduty" },
                  { value: "Leave", label: "Leave" },
                ]}
                value={{
                  value: formData.selectedSkill,
                  label: formData.selectedSkill,
                }}
                onChange={(selectedOption) =>
                  handleInputChange({
                    target: {
                      name: "selectedSkill",
                      value: selectedOption.value,
                    },
                  })
                }
                required
              />
            </div>
          </div>

          <div className="input-container">
            <label className="input-label">Date</label>
            <div className="date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "100%", backgroundColor: "white" }} // Adjust the width here
                  slotProps={{ textField: { size: "small" } }}
                  label=""
                  value={formData.selectedDate}
                  onChange={handleDateChange}
                  
                />
              </LocalizationProvider>
            </div>
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
              <div className="worklog">
                <h2
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
              </div>

              <div style={{ padding: "20px 20px 20px 20px" }}>
                <div className="input-container">
                  <label className="input-label">Work</label>

                  <Select
                    className="input"
                    options={[
                      { value: "Teaching", label: "Teaching" },
                      { value: "Research", label: "Research" },
                      { value: "Administrative", label: "Administrative" },
                      { value: "Other Work", label: "Other Work" },
                    ]}
                    value={{ value: log.work, label: log.work }}
                    onChange={(selectedOption) =>
                      handleWorkChange(selectedOption, index)
                    }
                    required
                  />
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
                          sx={{ width: "100%", backgroundColor: "white" }}
                          slotProps={{ textField: { size: "small" } }}
                          label=""
                          
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>
                <div className="input-container">
                  <label
                    className="input-label"
                    style={{ marginRight: "10px" }}
                  >
                    Until
                  </label>
                  <div style={{ flex: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <TimePicker
                          sx={{ width: "100%", backgroundColor: "white" }}
                          slotProps={{ textField: { size: "small" } }}
                          label=""
                          
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
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
              <Button label="Cancel" onClick={() => handleRemoveLog(index)} />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FacultyWorklogForm;
