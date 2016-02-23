SaturdaysSchedule = React.createClass({
  removeFromSaturday(id) {
    Meteor.call("resetSaturdaysSchedule", id, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      }
    });
  },

  goToDashboard(id) {
    FlowRouter.go("/clientDashboard/" + id);
  },

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white trainerSchedule">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Saturday</h4>
              {this.props.saturdaysData.map((saturday) => {
              return (
                <div key={saturday._id}>
                  <li><a href="#" onClick={this.goToDashboard.bind(null, saturday._id)}>{saturday.firstName} {saturday.lastName} </a><span className="red-text removeFromSaturdayMobile" onClick={this.removeFromSaturday.bind(null, saturday._id)}>[x]</span><h6 className="workoutStartTime"><b>Start:</b> {saturday.saturdaysScheduleStart}</h6> <h6 className="workoutEndTime"><b>End:</b> {saturday.saturdaysScheduleEnd} <span className="removeFromSaturday red-text" onClick={this.removeFromSaturday.bind(null, saturday._id)}>[x]</span></h6></li>
                  <div className="workoutDescription">Notes: {saturday.saturdayDescription}</div>
                </div>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
});