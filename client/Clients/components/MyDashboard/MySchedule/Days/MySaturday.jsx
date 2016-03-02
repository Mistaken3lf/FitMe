MySaturday = React.createClass({
  updateSaturdaysStatus(e) {
    const saturdayStatus = e.target.checked;
    Meteor.call("updateSaturdaysStatus", {
      saturdayStatus
    });
  },

  render() {
    return (
      <div className="col s12 m6 l6">
      <div className="card white">
        <div className="row">
          <div className="col s12 m12 l12">
            <h4 className="center">Saturday</h4>
            <div className="row">
            <div className="col s12 m6 l6">
              <label>Start Time: </label>
              <input type="text" name="saturdaysScheduleStart" defaultValue={this.props.scheduleData.saturdaysScheduleStart} placeholder="Start Time" readOnly />
            </div>
            <div className="col s12 m6 l6">
              <label>End Time:</label>
              <input type="text" name="saturdaysScheduleEnd" defaultValue={this.props.scheduleData.saturdaysScheduleEnd} placeholder="End Time" readOnly />
            </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                Description:
                <input type="text" ref="saturdayDescription" name="saturdayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.saturdayDescription} readOnly />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                Status: <span className="red-text">*</span>
                  <div className="switch">
                  <label>
                    No Go
                    <input type="checkbox" name="saturdayStatus" defaultChecked={this.props.scheduleData.saturdayStatus} onChange={this.updatesaturdaysStatus} />
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