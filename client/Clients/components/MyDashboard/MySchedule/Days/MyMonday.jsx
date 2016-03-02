MyMonday = React.createClass({
  updateMondaysStatus(e) {
    const mondayStatus = e.target.checked;
    Meteor.call("updateMondaysStatus", {
      mondayStatus
    });
  },

  render() {
    return (
      <div className="col s12 m6 l6">
      <div className="card white">
        <div className="row">
          <div className="col s12 m12 l12">
            <h4 className="center">Monday</h4>
            <div className="row">
            <div className="col s12 m6 l6">
              <label>Start Time: </label>
              <input type="text" name="mondaysScheduleStart" defaultValue={this.props.scheduleData.mondaysScheduleStart} placeholder="Start Time" readOnly />
            </div>
            <div className="col s12 m6 l6">
              <label>End Time:</label>
              <input type="text" name="mondaysScheduleEnd" defaultValue={this.props.scheduleData.mondaysScheduleEnd} placeholder="End Time" readOnly />
            </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                Description:
                <input type="text" ref="mondayDescription" name="mondayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.mondayDescription} readOnly />
              </div>
            </div>
            <div className="row">
              <div className="col s12 m12 l12">
                Status: <span className="red-text">*</span>
                  <div className="switch">
                  <label>
                    No Go
                    <input type="checkbox" name="mondayStatus" defaultChecked={this.props.scheduleData.mondayStatus} onChange={this.updateMondaysStatus} />
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