import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { ClientCardio } from '../../../collections/clientCardio.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.publish('trainer.clientsCardio', function (currentClientsId) {
  new SimpleSchema({
    currentClientsId: {
      type: String,
    },
  }).validate({
    currentClientsId,
  });

  if (Roles.userIsInRole(this.userId, 'trainer')) {
    // Find a specific clients cardio based on the url param
    // from flow router passed in as currentClientsId
    return ClientCardio.find({
      whosCardio: currentClientsId,
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});
