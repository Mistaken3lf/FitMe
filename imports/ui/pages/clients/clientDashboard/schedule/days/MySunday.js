import React from 'react';

function updateSundaysStatus(e) {
  const sundayStatus = e.target.checked;
  Meteor.call("updateSundaysStatus", {
    sundayStatus
  });
}

const MySunday = ({scheduleData}) => (
  <div className="col s12 m6 l6">
    <div className="card white">
      <div className="row">
        <div className="col s12 m12 l12">
          <h4 className="center">Sunday</h4>
          <div className="row">
          <div className="col s12 m6 l6">
            <label>Start Time: </label>
            <input type="text" name="sundaysScheduleStart" defaultValue={scheduleData.sundaysScheduleStart} placeholder="Start Time" readOnly />
          </div>
          <div className="col s12 m6 l6">
            <label>End Time:</label>
            <input type="text" name="sundaysScheduleEnd" defaultValue={scheduleData.sundaysScheduleEnd} placeholder="End Time" readOnly />
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Description:
              <input type="text" name="sundayDescription" placeholder="Workout Description" defaultValue={scheduleData.sundayDescription} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Status: <span className="red-text">*</span>
                <div className="switch">
                <label>
                  No Go
                  <input type="checkbox" name="sundayStatus" defaultChecked={scheduleData.sundayStatus} onChange={updateSundaysStatus} />
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

export default MySunday;