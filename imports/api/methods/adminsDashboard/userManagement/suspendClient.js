import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const suspendClient = new ValidatedMethod({
  name: 'suspendClient',

  validate: new SimpleSchema({
    id: {
      type: String,
    },
  }).validator(),

  run({
    id,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Find the client clicked on
      const user = Meteor.users.findOne(id);

      // Check if the user is active already
      if (user.userStatus == 'active') {
        // If they are active suspend them
        Meteor.users.update({
          _id: user._id,
        }, {
          $set: {
            userStatus: 'suspended',
            previouslySuspended: true,
          },
        });
      } else {
        // They are already suspended so set them to active
        Meteor.users.update({
          _id: user._id,
        }, {
          $set: {
            userStatus: 'active',
            previouslySuspended: false,
          },
        });
      }
    } else {
      throw new Meteor.Error('Not-Authorized');
    }
  },
});