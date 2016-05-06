import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {Roles} from 'meteor/alanning:roles';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const grantTwentyMoreClients = new ValidatedMethod({
  name: 'grantTwentyMoreClients',

  validate: new SimpleSchema({
    trainerId: {
      type: String,
    },
  }).validator(),

  run({
    trainerId,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Add 20 additional clients to the trainers limit
      Meteor.users.update({
        _id: trainerId,
      }, {
        $inc: {
          clientLimit: 20,
        },
      });
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
