TuesdaysSchedule = React.createClass({
  removeFromTuesday(id) {
    Meteor.call("resetTuesdaysSchedule", {id}, (error) => {
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
              <h4 className="center">Tuesday</h4>
              {this.props.tuesdaysData.map((tuesday) => {
              return (
                <div key={tuesday._id}>
                  <li><a href="#" onClick={this.goToDashboard.bind(null, tuesday._id)}>{tuesday.firstName} {tuesday.lastName} </a><span className="red-text removeFromTuesdayMobile" onClick={this.removeFromTuesday.bind(null, tuesday._id)}>[x]</span><h6 className="workoutStartTime"><b>Start:</b> {tuesday.tuesdaysScheduleStart}</h6> <h6 className="workoutEndTime"><b>End:</b> {tuesday.tuesdaysScheduleEnd} <span className="removeFromTuesday red-text" onClick={this.removeFromTuesday.bind(null, tuesday._id)}>[x]</span></h6></li>
                  <div className="workoutDescription">Notes: {tuesday.tuesdayDescription}</div>
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