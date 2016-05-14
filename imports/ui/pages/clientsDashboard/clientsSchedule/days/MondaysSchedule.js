import React from 'react';

function updateMondaysStatus(e) {
  const mondayStatus = e.target.checked;
  Meteor.call('updateMondaysStatus', {
    mondayStatus,
  });
}

const MyMonday = ({scheduleData}) => (
  <div className="col s12 m6 l6">
    <div className="card white">
      <div className="row">
        <div className="col s12 m12 l12">
          <h4 className="center">Monday</h4>
          <div className="row">
          <div className="col s12 m6 l6">
            <label>Start Time: </label>
            <input type="text" name="mondaysScheduleStart" defaultValue={scheduleData.mondaysScheduleStart} placeholder="Start Time" readOnly />
          </div>
          <div className="col s12 m6 l6">
            <label>End Time:</label>
            <input type="text" name="mondaysScheduleEnd" defaultValue={scheduleData.mondaysScheduleEnd} placeholder="End Time" readOnly />
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Description:
              <input type="text" name="mondayDescription" placeholder="Workout Description" defaultValue={scheduleData.mondayDescription} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Status: <span className="red-text">*</span>
                <div className="switch">
                <label>
                  No Go
                  <input type="checkbox" name="mondayStatus" defaultChecked={scheduleData.mondayStatus} onChange={updateMondaysStatus} />
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

export default MyMonday;