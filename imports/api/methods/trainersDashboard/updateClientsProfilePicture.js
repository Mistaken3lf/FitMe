import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const updateClientsProfilePicture = new ValidatedMethod({
  name: 'updateClientsProfilePicture',

  validate: new SimpleSchema({
    picture: {
      type: String,
    },

    clientId: {
      type: String,
    },
  }).validator(),

  run({
    picture,
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

      // Make sure the trainers owns this client
      if (thisClient.createdBy == this.userId) {
        // Update the clients profile picture
        Meteor.users.update({
          _id: clientId,
        }, {
          $set: {
            profilePicture: picture,
          },
        });
      }
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
