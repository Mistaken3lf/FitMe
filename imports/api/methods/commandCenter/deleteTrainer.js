import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ClientCardio } from '../../../collections/clientCardio.js';
import { ClientStats } from '../../../collections/clientStats.js';
import { ClientWorkout } from '../../../collections/clientWorkout.js';

export const deleteTrainer = new ValidatedMethod({
  name: 'deleteTrainer',

  validate: new SimpleSchema({
    id: {
      type: String,
    },
  }).validator(),

  run({
    id,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Remove cardio associated with the trainer being deleted
      ClientCardio.remove({
        createdBy: id,
      });

      // Remove client stats associated with the trainer being deleted
      ClientStats.remove({
        createdBy: id,
      });

      // Remove client workouts associated with the trainer being deleted
      ClientWorkout.remove({
        createdBy: id,
      });

      // Remove clients associated with the current trainer you are deleting
      Meteor.users.remove({
        createdBy: id,
      });

      // Remove trainer clicked on
      Meteor.users.remove(id);

    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
