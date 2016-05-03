import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const grantTenMoreClients = new ValidatedMethod({
  name: 'grantTenMoreClients',

  validate: new SimpleSchema({
    trainerId: {
      type: String,
    },
  }).validator(),

  run({
    trainerId,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Add 10 clients to the trainers client limit
      Meteor.users.update({
        _id: trainerId,
      }, {
        $inc: {
          clientLimit: 10,
        },
      });
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
