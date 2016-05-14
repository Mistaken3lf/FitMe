import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { ClientCardio } from '../../../collections/clientCardio.js';
import { ClientStats } from '../../../collections/clientStats.js';
import { ClientWorkout } from '../../../collections/clientWorkout.js';

export const activateFreePlan = new ValidatedMethod({
  name: 'activateFreePlan',

  validate: null,

  run() {
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      // Get todays date
      let today = moment().format('MM/DD/YYYY');

      // Set expiration to 1 week for free plan
      let expires = moment().add(1, 'weeks').format('MM/DD/YYYY');

      // Set the trainers plan to free
      Meteor.users.update({
        _id: this.userId,
      }, {
        $set: {
          clientLimit: 1,
          planType: 'Free',
          datePurchased: today,
          expiresOn: expires,
          hasPaid: false,
          userStatus: 'active',
        },
      });

      // Remove clients associated with the current trainer
      Meteor.users.remove({
        createdBy: this.userId,
      });

      // Remove cardio of the client being deleted
      ClientCardio.remove({
        createdBy: this.userId,
      });

      // Remove stats of the client being deleted
      ClientStats.remove({
        createdBy: this.userId,
      });

      // Remove workout of client being deleted
      ClientWorkout.remove({
        createdBy: this.userId,
      });

    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
