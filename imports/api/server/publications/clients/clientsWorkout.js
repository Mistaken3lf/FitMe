import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { ClientWorkout } from '../../../collections/clientWorkout.js';

Meteor.publish('clients.workout', function () {
  if (Roles.userIsInRole(this.userId, 'client')) {
    // Find my workout
    return ClientWorkout.find({
      whosWorkout: this.userId,
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});
