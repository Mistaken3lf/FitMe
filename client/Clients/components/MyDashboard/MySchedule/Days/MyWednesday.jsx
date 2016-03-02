MyWednesday = React.createClass({
  updateWednesdaysStatus(e) {
    const wednesdayStatus = e.target.checked;
    Meteor.call("updateWednesdaysStatus", {
      wednesdayStatus
    });
  },

  render() {
    return (
      <div className="col s12 m6 l6">
      <div className="card white">
        <div className="row">
          <div className="col s12 m12 l12">
            <h4 className="center">Wednesday</h4>
            <div className="row">
            <div className="col s12 m6 l6">
              <label>Start Time: </label>
              <input type="text" name="wednesdaysScheduleStart" defaultValue={this.props.scheduleData.wednesdaysScheduleStart} placeholder="Start Time" readOnly />
            </div>
            <div className="col s12 m6 l6">
              <label>End Time:</label>
              <input type="text" name="wednesdaysScheduleEnd" defaultValue={this.props.scheduleData.wednesdaysScheduleEnd} placeholder="End Time" readOnly />
            </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                Description:
                <input type="text" ref="wednesdayDescription" name="wednesdayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.wednesdayDescription} readOnly />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                Status: <span className="red-text">*</span>
                  <div className="switch">
                  <label>
                    No Go
                    <input type="checkbox" name="wednesdayStatus" defaultChecked={this.props.scheduleData.wednesdayStatus} onChange={this.updatewednesdaysStatus} />
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