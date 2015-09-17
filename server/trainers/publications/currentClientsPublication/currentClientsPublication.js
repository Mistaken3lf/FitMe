////////////////////////////////////////////////////////////////////////////////
Meteor.publish('currentClients', function() {
  //Make sure the user is a trainer and logged in before publishing
  if (this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    //Find all clients that the logged in user has created and that belongs
    //to them.
    return Meteor.users.find({
      roles: 'client',
      "userProfile.createdBy": this.userId
    }, {
      fields: {
        username: 1,
        "emails.address": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
      }
    });
  }

  //Not authorized to access trainers clients
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
////////////////////////////////////////////////////////////////////////////////
