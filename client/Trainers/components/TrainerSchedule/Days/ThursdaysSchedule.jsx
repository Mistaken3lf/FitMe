ThursdaysSchedule = React.createClass({
  removeFromThursday(id) {
    Meteor.call("resetThursdaysSchedule", {id}, (error) => {
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
              <h4 className="center">Thursday</h4>
              {this.props.thursdaysData.map((thursday) => {
              return (
                <div key={thursday._id}>
                  <li><a href="#" onClick={this.goToDashboard.bind(null, thursday._id)}>{thursday.firstName} {thursday.lastName} </a><span className="red-text removeFromThursdayMobile" onClick={this.removeFromThursday.bind(null, thursday._id)}>[x]</span><h6 className="workoutStartTime"><b>Start:</b> {thursday.thursdaysScheduleStart}</h6> <h6 className="workoutEndTime"><b>End:</b> {thursday.thursdaysScheduleEnd} <span className="removeFromThursday red-text" onClick={this.removeFromThursday.bind(null, thursday._id)}>[x]</span></h6></li>
                  <div className="workoutDescription">Notes: {thursday.thursdayDescription}</div>
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