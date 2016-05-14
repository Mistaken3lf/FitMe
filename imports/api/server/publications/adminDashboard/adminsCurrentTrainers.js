import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.publish('adminsCurrentTrainers', function (currentTrainerId) {
  new SimpleSchema({
    currentTrainerId: {
      type: String,
    },
  }).validate({
    currentTrainerId,
  });

  if (Roles.userIsInRole(this.userId, 'admin')) {
    // Find a specific trainer based on the flow router
    // param passed in as currentTrainerId
    return Meteor.users.find({
      _id: currentTrainerId,
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});
