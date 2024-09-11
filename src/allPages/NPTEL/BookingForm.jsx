import React, { useState } from "react";
import Select from "react-select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./BookingForm.css"; // Import CSS for styling
import Button from "../../components/Button/button";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";

function BookingForm() {
  const [reviewTypes] = useState(["Type 1", "Type 2", "Type 3"]);
  const [memberCounts] = useState([1, 2, 3, 4, 5]);
  const [venues] = useState([
    "Venue A",
    "Venue B",
    "Venue C",
    "Venue D",
    "Venue E",
  ]);
  const [formData, setFormData] = useState({
    reviewType: "",
    name: "",
    rollNo: "",
    faculty: "",
    tacId: "",
    memberCount: "",
    dateTime: "",
    venue: "",
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data:", formData);
  };

  const handleSelectChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
   
      <form onSubmit={handleSubmit}>
      <div className="entire-form">
     <div> <h1 className="heading">Faculty Slot Booking</h1></div>
        <div className="widget">
          <div className="input-group">
            <label className="input-label" htmlFor="reviewType">
              Review Type:
            </label>
            <Select
              id="reviewType"
              options={reviewTypes.map((type) => ({
                value: type,
                label: type,
              }))}
              onChange={(selectedOption) =>
                handleSelectChange("reviewType", selectedOption.value)
              }
              placeholder="Select Review Type"
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              required
              readOnly
              onChange={(event) => handleSelectChange("name", event.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="rollNo">
              Roll No:
            </label>
            <input
              type="text"
              id="rollNo"
              required
              onChange={(event) => handleSelectChange("rollNo", event.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="faculty">
              Faculty:
            </label>
            <input
              type="text"
              id="faculty"
              required
              onChange={(event) => handleSelectChange("faculty", event.target.value)}
            />
          </div>
        </div>

        <div className="widget">
          <div className="input-group">
            <label className="input-label" htmlFor="tacId">
              Tac ID:
            </label>
            <input
              type="text"
              id="tacId"
              required
              onChange={(event) => handleSelectChange("tacId", event.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="memberCount">
              Member Count:
            </label>
            <Select
              id="memberCount"
              options={memberCounts.map((count) => ({
                value: count,
                label: count,
              }))}
              onChange={(selectedOption) =>
                handleSelectChange("memberCount", selectedOption.value)
              }
              placeholder="Select Member Count"
              required
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="dateTime">
              Date and Time:
            </label>
            <div className="date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "100%", backgroundColor: "white" }} // Adjust the width here
                  slotProps={{ textField: { size: "small" } }}
                  label=""
                  value={formData.selectedDate}
                  onChange={handleDateChange}
                  TextFieldProps={{
                    style: { backgroundColor: "white" },
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="venue">
              Venue:
            </label>
            <Select
              id="venue"
              options={venues.map((venue) => ({
                value: venue,
                label: venue,
              }))}
              onChange={(selectedOption) =>
                handleSelectChange("venue", selectedOption.value)
              }
              placeholder="Select Venue"
              required
            />
          </div>
        </div>
        <div className="Buttons"><Button type="submit" label="Submit"/></div>
        </div>
      </form>
      
   
  );
}

export default BookingForm;
