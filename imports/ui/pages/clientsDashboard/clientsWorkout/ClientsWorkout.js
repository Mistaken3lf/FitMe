import React from 'react';
import Loading from '../../ui/loading/components/Loading.js';
import NotAuthorized from '../../ui/notAuthorized/components/NotAuthorized.js';

MyWorkout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe('myWorkout');

    const myWorkout = ClientWorkout.findOne({
      whosWorkout: Meteor.userId(),
    });

    return {
      loading: !handle.ready(),

      myWorkout: myWorkout || {},
    }
  },

  render() {
    if (this.data.loading) {
      return (
        <Loading />
      );
    } else if (Meteor.loggingIn()) {
      return (
        <Loading />
      );
    } else if (Roles.userIsInRole(Meteor.userId(), 'client')) {
      return (
        <div className="card grey lighten-4">
          <div className="col s12 m12 l12">
            <div className="card z-depth-1">
              <div className="blue card-title center-align white-text">WORKOUT CARD</div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m12 l12">
              <MyWorkoutDate workoutData={this.data.myWorkout} />
              <MyExerciseOne workoutData={this.data.myWorkout} />
              <MyExerciseTwo workoutData={this.data.myWorkout} />
              <MyExerciseThree workoutData={this.data.myWorkout} />
              <MyExerciseFour workoutData={this.data.myWorkout} />
              <MyExerciseFive workoutData={this.data.myWorkout} />
              <MyExerciseSix workoutData={this.data.myWorkout} />
              <MyExerciseSeven workoutData={this.data.myWorkout} />
              <MyExerciseEight workoutData={this.data.myWorkout} />
              <MyExerciseNine workoutData={this.data.myWorkout} />
              <MyExerciseTen workoutData={this.data.myWorkout} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <NotAuthorized />
      );
    }
  },
});