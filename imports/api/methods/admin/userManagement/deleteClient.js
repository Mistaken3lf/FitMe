import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const deleteClient = new ValidatedMethod({
  name: 'deleteClient',

  validate: new SimpleSchema({
    id: {
      type: String,
    },
  }).validator(),

  run({
    id,
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      // Remove client clicked on
      Meteor.users.remove(id);
    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});
