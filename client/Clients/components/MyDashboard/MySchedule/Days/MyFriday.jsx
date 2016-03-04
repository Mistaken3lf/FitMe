MyFriday = React.createClass({
  updateFridaysStatus(e) {
    const fridayStatus = e.target.checked;
    Meteor.call("updateFridaysStatus", {
      fridayStatus
    });
  },

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Friday</h4>
              <div className="row">
              <div className="col s12 m6 l6">
                <label>Start Time: </label>
                <input type="text" name="fridaysScheduleStart" defaultValue={this.props.scheduleData.fridaysScheduleStart} placeholder="Start Time" readOnly />
              </div>
              <div className="col s12 m6 l6">
                <label>End Time:</label>
                <input type="text" name="fridaysScheduleEnd" defaultValue={this.props.scheduleData.fridaysScheduleEnd} placeholder="End Time" readOnly />
              </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Description:
                  <input type="text" ref="fridayDescription" name="fridayDescription" placeholder="Workout Description" defaultValue={this.props.scheduleData.fridayDescription} readOnly />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m12 l12">
                  Status: <span className="red-text">*</span>
                    <div className="switch">
                    <label>
                      No Go
                      <input type="checkbox" name="fridayStatus" defaultChecked={this.props.scheduleData.fridayStatus} onChange={this.updateFridaysStatus} />
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