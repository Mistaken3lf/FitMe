import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const updateLoginStatus = new ValidatedMethod({
  name: 'updateLoginStatus',

  validate: null,

  run() {
    if (Meteor.userId()) {
      // Get todays date
      let today = moment().format('MM/DD/YYYY');

      // Set the newly logged in date to today
      Meteor.users.update({
        _id: this.userId,
      }, {
        $set: {
          lastLogin: today,
        },
      });

    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});