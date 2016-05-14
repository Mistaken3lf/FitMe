import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { ClientCardio } from '../../../collections/clientCardio.js';

Meteor.publish('clientsCardio', function () {
  if (Roles.userIsInRole(this.userId, 'client')) {
    // Find the logged in clients cardio
    return ClientCardio.find({
      whosCardio: this.userId,
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});
