import React from 'react';

function updateSaturdaysStatus(e) {
  const saturdayStatus = e.target.checked;
  Meteor.call("updateSaturdaysStatus", {
    saturdayStatus
  });
}

const MySaturday = ({scheduleData}) => (
  <div className="col s12 m6 l6">
    <div className="card white">
      <div className="row">
        <div className="col s12 m12 l12">
          <h4 className="center">Saturday</h4>
          <div className="row">
          <div className="col s12 m6 l6">
            <label>Start Time: </label>
            <input type="text" name="saturdaysScheduleStart" defaultValue={scheduleData.saturdaysScheduleStart} placeholder="Start Time" readOnly />
          </div>
          <div className="col s12 m6 l6">
            <label>End Time:</label>
            <input type="text" name="saturdaysScheduleEnd" defaultValue={scheduleData.saturdaysScheduleEnd} placeholder="End Time" readOnly />
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Description:
              <input type="text" name="saturdayDescription" placeholder="Workout Description" defaultValue={scheduleData.saturdayDescription} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Status: <span className="red-text">*</span>
                <div className="switch">
                <label>
                  No Go
                  <input type="checkbox" name="saturdayStatus" defaultChecked={scheduleData.saturdayStatus} onChange={updateSaturdaysStatus} />
                  <span className="lever"></span>
                  Go
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MySaturday;