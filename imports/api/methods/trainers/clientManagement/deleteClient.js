import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ClientCardio } from '../../../collections/clientCardio.js';
import { ClientStats } from '../../../collections/clientStats.js';
import { ClientWorkout } from '../../../collections/clientWorkout.js';

export const deleteClient = new ValidatedMethod({
  name: 'deleteClient',

  validate: new SimpleSchema({
    id: {
      type: String,
    },
  }).validator(),

  run({
    id,
  }) {
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      // Find the current trainer
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId,
      });

      // If they are suspended then deny them
      if (currentTrainer.userStatus == 'suspended') {
        throw new Meteor.Error('Your account is suspended');
      }

      // Find the client
      const thisClient = Meteor.users.findOne({
        _id: id,
      });

      // Make sure client is actually owned by the trainer
      if (thisClient.createdBy == this.userId) {
        // Remove cardio of the client being deleted
        ClientCardio.remove({
          whosCardio: id,
        });

        // Remove stats of the client being deleted
        ClientStats.remove({
          whosStats: id,
        });

        // Remove workout of client being deleted
        ClientWorkout.remove({
          whosWorkout: id,
        });

        // Delete the client clicked on
        Meteor.users.remove(id);
      }
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
