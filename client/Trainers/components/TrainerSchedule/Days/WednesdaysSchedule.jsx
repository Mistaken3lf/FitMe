WednesdaysSchedule = React.createClass({
  removeFromWednesday(id) {
    Meteor.call("resetWednesdaysSchedule", {id}, (error) => {
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
              <h4 className="center">Wednesday</h4>
              {this.props.wednesdaysData.map((wednesday) => {
              return (
                <div key={wednesday._id}>
                  <li><a href="#" onClick={this.goToDashboard.bind(null, wednesday._id)}>{wednesday.firstName} {wednesday.lastName} </a><span className="red-text removeFromWednesdayMobile" onClick={this.removeFromWednesday.bind(null, wednesday._id)}>[x]</span><h6 className="workoutStartTime"><b>Start:</b> {wednesday.wednesdaysScheduleStart}</h6> <h6 className="workoutEndTime"><b>End:</b> {wednesday.wednesdaysScheduleEnd} <span className="removeFromWednesday red-text" onClick={this.removeFromWednesday.bind(null, wednesday._id)}>[x]</span></h6></li>
                  <div className="workoutDescription">Notes: {wednesday.wednesdayDescription}</div>
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