import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Roles } from 'meteor/alanning:roles';

export const deleteAccount = new ValidatedMethod({
  name: 'deleteAccount',

  validate: null,

  run() {
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      // Set the trainers status to deleted
      Meteor.users.update({
        _id: this.userId,
      }, {
        $set: {
          userStatus: 'deleted',
        },
      });

      // Set the trainers clients status to deleted as well
      Meteor.users.update({
        createdBy: this.userId,
      }, {
        $set: {
          userStatus: 'deleted',
        },
      }, {
        multi: true,
      });

    } else {
      throw new Meteor.Error('not-authorized');
    }
  },
});