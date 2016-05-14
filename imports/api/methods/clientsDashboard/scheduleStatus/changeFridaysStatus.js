import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const changeFridaysStatus = new ValidatedMethod({
  name: 'changeFridaysStatus',

  validate: new SimpleSchema({
    fridayStatus: {
      type: Boolean,
    },
  }).validator(),

  run({
    fridayStatus,
  }) {
    if (Roles.userIsInRole(this.userId, 'client')) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId,
      });

      // Check if the client is suspended and prevent them from changing status
      if (thisClient.userStatus == 'suspended') {
        throw new Meteor.Error('Sorry, you account is suspended');
      }

      // Update fridays status
      Meteor.users.update({
        _id: this.userId,
      }, {
        $set: {
          fridayStatus: fridayStatus,
        },
      });
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
