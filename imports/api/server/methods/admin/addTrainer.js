import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Accounts } from 'meteor/accounts-base';

export const CreateTrainer = new ValidatedMethod({
  name: 'createTrainer',

  validate: new SimpleSchema({
    username: {
      type: String,
      min: 2,
    },

    password: {
      type: String,
      min: 2,
    },

    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
    },

    firstName: {
      type: String,
      min: 2,
    },

    lastName: {
      type: String,
      min: 2,
    },
  }).validator(),

  run({
    username,
    password,
    email,
    firstName,
    lastName,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Create the new trainer
      let newTrainerId = Accounts.createUser({
        username: username,
        password: password,
        email: email,
      });

      // Get todays date
      let today = moment().format('MM/DD/YYYY');

      // Set expiration to one week for free plan
      let expires = moment().add(1, 'weeks').format('MM/DD/YYYY');

      // Update the trainers first and last name since they are not default
      // Meteor.user fields
      Meteor.users.update(newTrainerId, {
        $set: {
          firstName: firstName,
          lastName: lastName,
          clientLimit: 1,
          userStatus: 'active',
          planType: 'Free',
          datePurchased: today,
          expiresOn: expires,
          hasPaid: false,
        },
      });

      // Assign newly created trainer a trainer role
      Roles.addUsersToRoles(newTrainerId, 'trainer');
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
