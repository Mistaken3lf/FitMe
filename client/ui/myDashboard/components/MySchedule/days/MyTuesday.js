import React from 'react';

function updateTuesdaysStatus(e) {
  const tuesdayStatus = e.target.checked;
  Meteor.call("updateTuesdaysStatus", {
    tuesdayStatus
  });
}

const MyTuesday = ({scheduleData}) => (
  <div className="col s12 m6 l6">
    <div className="card white">
      <div className="row">
        <div className="col s12 m12 l12">
          <h4 className="center">Tuesday</h4>
          <div className="row">
          <div className="col s12 m6 l6">
            <label>Start Time: </label>
            <input type="text" name="tuesdaysScheduleStart" defaultValue={scheduleData.tuesdaysScheduleStart} placeholder="Start Time" readOnly />
          </div>
          <div className="col s12 m6 l6">
            <label>End Time:</label>
            <input type="text" name="tuesdaysScheduleEnd" defaultValue={scheduleData.tuesdaysScheduleEnd} placeholder="End Time" readOnly />
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Description:
              <input type="text" name="tuesdayDescription" placeholder="Workout Description" defaultValue={scheduleData.tuesdayDescription} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Status: <span className="red-text">*</span>
                <div className="switch">
                <label>
                  No Go
                  <input type="checkbox" name="tuesdayStatus" defaultChecked={scheduleData.tuesdayStatus} onChange={updateTuesdaysStatus} />
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

export default MyTuesday;