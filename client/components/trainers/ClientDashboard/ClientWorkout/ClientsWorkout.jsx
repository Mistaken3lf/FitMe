import React from 'react';

ClientsWorkout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const clientId = FlowRouter.getParam('_id');
    const handle = Meteor.subscribe("currentClientsWorkout", clientId);

    const currentClientsWorkout = ClientWorkout.findOne({
      whosWorkout: clientId
    });

    return {
      loading: !handle.ready(),

      currentClientsWorkout: currentClientsWorkout || {}
    }
  },

  render() {
    if(this.data.loading) {
      return (
        <Loading />
      );
    } else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), "trainer")) {
      return (
        <div className="card grey lighten-4">
          <div className="col s12 m12 l12">
            <div className="card z-depth-1">
              <div className="blue card-title center-align white-text">WORKOUT CARD</div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              <WorkoutDate workoutData={this.data.currentClientsWorkout} />
              <ExerciseOne workoutData={this.data.currentClientsWorkout} />
              <ExerciseTwo workoutData={this.data.currentClientsWorkout} />
              <ExerciseThree workoutData={this.data.currentClientsWorkout} />
              <ExerciseFour workoutData={this.data.currentClientsWorkout} />
              <ExerciseFive workoutData={this.data.currentClientsWorkout} />
              <ExerciseSix workoutData={this.data.currentClientsWorkout} />
              <ExerciseSeven workoutData={this.data.currentClientsWorkout} />
              <ExerciseEight workoutData={this.data.currentClientsWorkout} />
              <ExerciseNine workoutData={this.data.currentClientsWorkout} />
              <ExerciseTen workoutData={this.data.currentClientsWorkout} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  }
});