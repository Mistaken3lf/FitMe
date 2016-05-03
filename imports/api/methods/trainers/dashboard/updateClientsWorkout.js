import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ClientWorkout } from '../../../collections/clientWorkout.js';

export const updateClientsWorkout = new ValidatedMethod({
  name: 'updateClientsWorkout',

  validate: new SimpleSchema({
    fieldName: {
      type: String,
    },

    data: {
      type: String,
    },

    clientId: {
      type: String,
    },
  }).validator(),

  run({
    fieldName,
    data,
    clientId,
  }) {
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      // Find the current trainer
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId,
      });

      // Prevent trainer from updating clients profile if they are suspended
      if (currentTrainer.userStatus == 'suspended') {
        throw new Meteor.Error('Your account is suspended');
      }

      // Find the trainers client
      const thisClient = Meteor.users.findOne({
        _id: clientId,
      });

      // Make sure the trainer owns the client
      if (thisClient.createdBy == this.userId) {
        let name = fieldName;
        let value = data;
        let query = {};
        query[name] = value;

        // Update or insert the clients stats
        ClientWorkout.upsert({
          whosWorkout: clientId,
          createdBy: this.userId,
        }, {
          $set: query,
        });
      }
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
