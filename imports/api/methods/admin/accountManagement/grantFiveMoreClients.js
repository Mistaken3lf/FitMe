import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {Roles} from 'meteor/alanning:roles';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const grantFiveMoreClients = new ValidatedMethod({
  name: 'grantFiveMoreClients',

  validate: new SimpleSchema({
    trainerId: {
      type: String,
    },
  }).validator(),

  run({
    trainerId,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Add 5 additional clients to trainers limit
      Meteor.users.update({
        _id: trainerId,
      }, {
        $inc: {
          clientLimit: 5,
        },
      });
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
