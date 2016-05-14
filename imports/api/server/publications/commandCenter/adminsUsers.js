import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('adminsUsers', function () {
  if (Roles.userIsInRole(this.userId, 'admin')) {
    // Find all my users
    return Meteor.users.find({}, {
      fields: {
        username: 1,
        'emails.address': 1,
        firstName: 1,
        lastName: 1,
        userStatus: 1,
        planType: 1,
        expiresOn: 1,
        clientLimit: 1,
        roles: 1,
        datePurchased: 1,
      },
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});
