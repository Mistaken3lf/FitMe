import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish('clientsTrainer', function () {
  const currentClient = Meteor.users.findOne({
    _id: this.userId,
  });

  if (Roles.userIsInRole(this.userId, 'client')) {
    // Publish a specific clients profile based on the flow router url param
    // currentClientsId.
    return Meteor.users.find({
      roles: 'trainer',
      _id: currentClient.createdBy,
    }, {
      fields: {
        username: 1,
        'emails.address': 1,
        firstName: 1,
        lastName: 1,
        birthday: 1,
        address: 1,
        city: 1,
        state: 1,
        zip: 1,
        homePhone: 1,
        workPhone: 1,
        emergencyContact: 1,
        bio: 1,
        fitnessGoals: 1,
      },
    });
  } else {
    throw new Meteor.Error('not-authorized');
  }
});
