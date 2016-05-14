import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { ClientStats } from '../../../collections/clientStats.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.publish('trainersClientsStats', function (currentClientsId) {
  new SimpleSchema({
    currentClientsId: {
      type: String,
    },
  }).validate({
    currentClientsId,
  });

  if (Roles.userIsInRole(this.userId, 'trainer')) {
    // Find a specific clients stats based on the currrentClientsId
    // passed in from flow router.
    return ClientStats.find({
      whosStats: currentClientsId,
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});