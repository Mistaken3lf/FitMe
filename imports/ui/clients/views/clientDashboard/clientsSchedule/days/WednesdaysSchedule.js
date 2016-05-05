import React from 'react';

function updateWednesdaysStatus(e) {
  const wednesdayStatus = e.target.checked;
  Meteor.call('updateWednesdaysStatus', {
    wednesdayStatus,
  });
}

const MyWednesday = ({scheduleData}) => (
  <div className="col s12 m6 l6">
    <div className="card white">
      <div className="row">
        <div className="col s12 m12 l12">
          <h4 className="center">Wednesday</h4>
          <div className="row">
          <div className="col s12 m6 l6">
            <label>Start Time: </label>
            <input type="text" name="wednesdaysScheduleStart" defaultValue={scheduleData.wednesdaysScheduleStart} placeholder="Start Time" readOnly />
          </div>
          <div className="col s12 m6 l6">
            <label>End Time:</label>
            <input type="text" name="wednesdaysScheduleEnd" defaultValue={scheduleData.wednesdaysScheduleEnd} placeholder="End Time" readOnly />
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Description:
              <input type="text" name="wednesdayDescription" placeholder="Workout Description" defaultValue={scheduleData.wednesdayDescription} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Status: <span className="red-text">*</span>
                <div className="switch">
                <label>
                  No Go
                  <input type="checkbox" name="wednesdayStatus" defaultChecked={scheduleData.wednesdayStatus} onChange={updateWednesdaysStatus} />
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

export default MyWednesday;