import React from 'react';

FridaysSchedule = React.createClass({
  removeFromFriday(id) {
    Meteor.call("resetFridaysSchedule", {id}, (error) => {
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
              <h4 className="center">Friday</h4>
              {this.props.fridaysData.map((friday) => {
              return (
                <div key={friday._id}>
                  <li><a href="#" onClick={this.goToDashboard.bind(null, friday._id)}>{friday.firstName} {friday.lastName} </a><span className="red-text removeFromFridayMobile" onClick={this.removeFromFriday.bind(null, friday._id)}>[x]</span><h6 className="workoutStartTime"><b>Start:</b> {friday.fridaysScheduleStart}</h6> <h6 className="workoutEndTime"><b>End:</b> {friday.fridaysScheduleEnd} <span className="removeFromFriday red-text" onClick={this.removeFromFriday.bind(null, friday._id)}>[x]</span></h6></li>
                  <div className="workoutDescription">Notes: {friday.fridayDescription}</div>
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