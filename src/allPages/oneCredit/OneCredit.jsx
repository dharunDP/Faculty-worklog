import React from "react";
import "./OneCredit.css";
import Button from "../../components/Button/button";

function OneCredit() {
  return (
    <div>
      <div>
          
   <h1
            style={{
              marginBottom: "20px",
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            Faculty WorkLog
          </h1>
        </div>
      <div className="entire-form">
        
        <div className="widget">
          <div className="input-group">
            <label className="input-label" >
              Faculty Name
            </label>
            <input type="text" readOnly></input>
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="name">
              Department
            </label>
            <input type="text"  required readOnly />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="rollNo">
              Faculty ID
            </label>
            <input type="text" required readOnly />
          </div>
        </div>

        <div className="widget">
          <div className="input-group">
            <label className="input-label">
              WorkLog ID
            </label>
            <input type="text" required readOnly />
          </div>
          <div className="input-group">
            <label className="input-label">
              Date
            </label>
            <input type="date" required readOnly />
          </div>
          <div className="input-group">
            <label className="input-label" >
              From
            </label>
            <input type="time" required readOnly />
          </div>
          <div className="input-group">
            <label className="input-label">
              To
            </label>
            <input type="time" required readOnly />
          </div>
          <div className="input-group">
            <label className="input-label" >
              Work
            </label>
            <input type="text"  required readOnly/>
          </div>
          <div className="input-group">
            <label className="input-label">
            Reporting Committee
            </label>
            <input type="text"  required readOnly/>
          </div>
          <div className="input-group">
            <label className="input-label" >
            Head of Committee
            </label>
            <input type="text"  required readOnly />
          </div>
          <div className="input-group">
            <label className="input-label">
            Status
            </label>
            <input type="text"  required readOnly />
          </div>
          <div className="input-group">
            <label className="input-label" >
            Remarks
            </label>
            <input type="text"  required readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneCredit;