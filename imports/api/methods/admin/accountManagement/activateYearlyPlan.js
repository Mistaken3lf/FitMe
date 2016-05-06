import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {Roles} from 'meteor/alanning:roles';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import moment from 'moment';

export const yearlyPlan = new ValidatedMethod({
  name: 'yearlyPlan',

  validate: new SimpleSchema({
    trainerId: {
      type: String,
    },
  }).validator(),

  run({
    trainerId,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Get todays date
      let today = moment().format('MM/DD/YYYY');

      // Set expiration to 12 months from now
      let expires = moment().add(12, 'months').format('MM/DD/YYYY');

      // Find the current trainer
      const curTrainer = Meteor.users.findOne({
        _id: trainerId,
      });

      // Check if the trainer has more than 50 client limit already
      if (curTrainer.clientLimit > 50) {
        // Update trainer to yearly plan
        Meteor.users.update({
          _id: trainerId,
        }, {
          $set: {
            planType: 'One Year',
            datePurchased: today,
            expiresOn: expires,
            userStatus: 'active',
            hasPaid: true,
          },
        });

        // Update the clients status as well
        Meteor.users.update({
          createdBy: trainerId,
          previouslySuspended: false,
        }, {
          $set: {
            userStatus: 'active',
          },
        }, {
          multi: true,
        });

      } else {
        // Trainer does not have more than 50 clients so update
        // them to the 50 limit and rest of the plan details
        Meteor.users.update({
          _id: trainerId,
        }, {
          $set: {
            clientLimit: 50,
            planType: 'One Year',
            datePurchased: today,
            expiresOn: expires,
            userStatus: 'active',
            hasPaid: true,
          },
        });

        // Update the clients status to active
        Meteor.users.update({
          createdBy: trainerId,
          previouslySuspended: false,
        }, {
          $set: {
            userStatus: 'active',
          },
        }, {
          multi: true,
        });
      }
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
