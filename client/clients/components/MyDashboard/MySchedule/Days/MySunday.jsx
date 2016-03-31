import React from 'react';

MySunday = React.createClass({
  updateSundaysStatus(e) {
    const sundayStatus = e.target.checked;
    Meteor.call("updateSundaysStatus", {
      sundayStatus
    });
  },

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Sunday</h4>
              <div className="row">
              <div className="col s12 m6 l6">
                <label>Start Time: </label>
                <input type="text" name="sundaysScheduleStart" defaultValue={this.props.scheduleData.sundaysScheduleStart} placeholder="Start Time" readOnly />
              </div>
              <div className="col s12 m6 l6">
                <label>End Time:</label>
                <input type="text" name="sundaysScheduleEnd" defaultValue={this.props.scheduleData.sundaysScheduleEnd} placeholder="End Time" readOnly />
              </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Description:
                  <input type="text" ref="sundayDescription" name="sundayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.sundayDescription} readOnly />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Status: <span className="red-text">*</span>
                    <div className="switch">
                    <label>
                      No Go
                      <input type="checkbox" name="sundayStatus" defaultChecked={this.props.scheduleData.sundayStatus} onChange={this.updateSundaysStatus} />
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