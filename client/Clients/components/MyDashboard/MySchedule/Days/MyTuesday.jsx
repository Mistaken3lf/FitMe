MyTuesday = React.createClass({
  updateTuesdaysStatus(e) {
    const tuesdayStatus = e.target.checked;
    Meteor.call("updateTuesdaysStatus", {
      tuesdayStatus
    });
  },

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Tuesday</h4>
              <div className="row">
              <div className="col s12 m6 l6">
                <label>Start Time: </label>
                <input type="text" name="tuesdaysScheduleStart" defaultValue={this.props.scheduleData.tuesdaysScheduleStart} placeholder="Start Time" readOnly />
              </div>
              <div className="col s12 m6 l6">
                <label>End Time:</label>
                <input type="text" name="tuesdaysScheduleEnd" defaultValue={this.props.scheduleData.tuesdaysScheduleEnd} placeholder="End Time" readOnly />
              </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Description:
                  <input type="text" ref="tuesdayDescription" name="tuesdayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.tuesdayDescription} readOnly />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Status: <span className="red-text">*</span>
                    <div className="switch">
                    <label>
                      No Go
                      <input type="checkbox" name="tuesdayStatus" defaultChecked={this.props.scheduleData.tuesdayStatus} onChange={this.updateTuesdaysStatus} />
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