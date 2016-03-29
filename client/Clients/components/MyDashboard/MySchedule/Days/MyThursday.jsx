import React from 'react';

MyThursday = React.createClass({
  updateThursdaysStatus(e) {
    const thursdayStatus = e.target.checked;
    Meteor.call("updateThursdaysStatus", {
      thursdayStatus
    });
  },

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Thursday</h4>
              <div className="row">
              <div className="col s12 m6 l6">
                <label>Start Time: </label>
                <input type="text" name="thursdaysScheduleStart" defaultValue={this.props.scheduleData.thursdaysScheduleStart} placeholder="Start Time" readOnly />
              </div>
              <div className="col s12 m6 l6">
                <label>End Time:</label>
                <input type="text" name="thursdaysScheduleEnd" defaultValue={this.props.scheduleData.thursdaysScheduleEnd} placeholder="End Time" readOnly />
              </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Description:
                  <input type="text" ref="thursdayDescription" name="thursdayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.thursdayDescription} readOnly />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Status: <span className="red-text">*</span>
                    <div className="switch">
                    <label>
                      No Go
                      <input type="checkbox" name="thursdayStatus" defaultChecked={this.props.scheduleData.thursdayStatus} onChange={this.updateThursdaysStatus} />
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
  }
});