import React from 'react';
import Alert from 'react-s-alert';

SundaysSchedule = React.createClass({
  removeFromSunday(id) {
    Meteor.call('resetSundaysSchedule', {
      id,
    }, (error) => {
      if (error) {
        Alert.error(error.reason, {
          position: 'top-right',
          effect: 'jelly',
        });
      }
    });
  },

  goToDashboard(id) {
    FlowRouter.go('/clientDashboard/' + id);
  },

  render() {
    return (
      <div className="col s12 m6 l6">
        <div className="card white trainerSchedule">
          <div className="row">
            <div className="col s12 m12 l12">
              <h4 className="center">Sunday</h4>
              {this.props.sundaysData.map((sunday) => {
              return (
                <div key={sunday._id}>
                  <li><a href="#" onClick={this.goToDashboard.bind(null, sunday._id)}>{sunday.firstName} {sunday.lastName} </a><span className="red-text removeFromSundayMobile" onClick={this.removeFromSunday.bind(null, sunday._id)}>[x]</span><h6 className="workoutStartTime"><b>Start:</b> {sunday.sundaysScheduleStart}</h6> <h6 className="workoutEndTime"><b>End:</b> {sunday.sundaysScheduleEnd} <span className="removeFromSunday red-text" onClick={this.removeFromSunday.bind(null, sunday._id)}>[x]</span></h6></li>
                  <div className="workoutDescription">Notes: {sunday.sundayDescription}</div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  },
});