import React from 'react';

function updateThursdaysStatus(e) {
  const thursdayStatus = e.target.checked;
  Meteor.call("updateThursdaysStatus", {
    thursdayStatus
  });
}

const MyThursday = ({scheduleData}) => (
  <div className="col s12 m6 l6">
    <div className="card white">
      <div className="row">
        <div className="col s12 m12 l12">
          <h4 className="center">Thursday</h4>
          <div className="row">
          <div className="col s12 m6 l6">
            <label>Start Time: </label>
            <input type="text" name="thursdaysScheduleStart" defaultValue={scheduleData.thursdaysScheduleStart} placeholder="Start Time" readOnly />
          </div>
          <div className="col s12 m6 l6">
            <label>End Time:</label>
            <input type="text" name="thursdaysScheduleEnd" defaultValue={scheduleData.thursdaysScheduleEnd} placeholder="End Time" readOnly />
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Description:
              <input type="text" name="thursdayDescription" placeholder="Workout Description" defaultValue={scheduleData.thursdayDescription} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Status: <span className="red-text">*</span>
                <div className="switch">
                <label>
                  No Go
                  <input type="checkbox" name="thursdayStatus" defaultChecked={scheduleData.thursdayStatus} onChange={updateThursdaysStatus} />
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

export default MyThursday;