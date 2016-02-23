MondaysSchedule = React.createClass({
  removeFromMonday(id) {
    Meteor.call("resetMondaysSchedule", {id}, (error) => {
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
              <h4 className="center">Monday</h4>
              {this.props.mondaysData.map((monday) => {
              return (
                <div key={monday._id}>
                  <li><a href="#" onClick={this.goToDashboard.bind(null, monday._id)}>{monday.firstName} {monday.lastName} </a><span className="red-text removeFromMondayMobile" onClick={this.removeFromMonday.bind(null, monday._id)}>[x]</span><h6 className="workoutStartTime"><b>Start:</b> {monday.mondaysScheduleStart}</h6> <h6 className="workoutEndTime"><b>End:</b> {monday.mondaysScheduleEnd} <span className="removeFromMonday red-text" onClick={this.removeFromMonday.bind(null, monday._id)}>[x]</span></h6></li>
                  <div className="workoutDescription">Notes: {monday.mondayDescription}</div>
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