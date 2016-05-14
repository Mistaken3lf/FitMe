import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const removeFromSaturdaysSchedule = new ValidatedMethod({
  name: 'removeFromSaturdaysSchedule',

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
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId,
      });

      // Find the trainers client
      const trainersClient = Meteor.users.findOne({
        _id: id,
      });

      // /Make sure the trainer is not suspended
      if (thisTrainer.userStatus == 'suspended') {
        throw new Meteor.Error('Sorry, your account has been suspended');
      }

      // Make sure the trainer owns the client
      if (trainersClient.createdBy == this.userId) {
        // Reset saturdays schedule
        Meteor.users.update({
          _id: id,
        }, {
          $set: {
            saturdaysScheduleStart: '',
            saturdaysScheduleEnd: '',
            saturdayDescription: '',
            saturdayStatus: false,
          },
        });
      }

    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
