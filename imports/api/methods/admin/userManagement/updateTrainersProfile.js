import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const updateTrainersProfile = new ValidatedMethod({
  name: 'updateTrainersProfile',

  validate: new SimpleSchema({
    fieldName: {
      type: String,
    },

    data: {
      type: String,
    },

    trainerId: {
      type: String,
    },
  }).validator(),

  run({
    fieldName,
    data,
    trainerId,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      let name = fieldName;
      let value = data;
      let query = {};
      query[name] = value;

      // Update the users new profile
      Meteor.users.update({
        _id: trainerId,
      }, {
        $set: query,
      });

    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
