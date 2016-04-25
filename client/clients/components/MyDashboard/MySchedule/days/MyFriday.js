import React from 'react';

function updateFridaysStatus(e) {
  const fridayStatus = e.target.checked;
  Meteor.call("updateFridaysStatus", {
    fridayStatus
  });
}

const MyFriday = ({scheduleData}) => (
  <div className="col s12 m6 l6">
    <div className="card white">
      <div className="row">
        <div className="col s12 m12 l12">
          <h4 className="center">Friday</h4>
          <div className="row">
          <div className="col s12 m6 l6">
            <label>Start Time: </label>
            <input type="text" name="fridaysScheduleStart" defaultValue={scheduleData.fridaysScheduleStart} placeholder="Start Time" readOnly />
          </div>
          <div className="col s12 m6 l6">
            <label>End Time:</label>
            <input type="text" name="fridaysScheduleEnd" defaultValue={scheduleData.fridaysScheduleEnd} placeholder="End Time" readOnly />
          </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Description:
              <input type="text" name="fridayDescription" placeholder="Workout Description" defaultValue={scheduleData.fridayDescription} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              Status: <span className="red-text">*</span>
                <div className="switch">
                <label>
                  No Go
                  <input type="checkbox" name="fridayStatus" defaultChecked={scheduleData.fridayStatus} onChange={updateFridaysStatus} />
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

export default MyFriday;