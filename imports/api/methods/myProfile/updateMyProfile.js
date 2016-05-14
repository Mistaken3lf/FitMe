import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const updateUsersProfile = new ValidatedMethod({
  name: 'updateUsersProfile',

  validate: new SimpleSchema({
    fieldName: {
      type: String,
    },

    data: {
      type: String,
    },
  }).validator(),

  run({
    fieldName,
    data,
  }) {
    if (Meteor.userId()) {
      const currentUser = Meteor.users.findOne({
        _id: this.userId,
      });

      if (currentUser.userStatus == 'suspended') {
        throw new Meteor.Error('Sorry, you account has been suspended');
      }

      let name = fieldName;
      let value = data;
      let query = {};
      query[name] = value;

      // Update the users new profile
      Meteor.users.update({
        _id: this.userId,
      }, {
        $set: query,
      });

    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});