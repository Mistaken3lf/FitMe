Meteor.publish('currentClients', function () {
  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Find all clients that the logged in user has created and that belongs
    //to them.
    return Meteor.users.find({
      roles: 'client',
      createdBy: this.userId,
    }, {
      fields: {
        username: 1,
        sessionDate: 1,
        firstName: 1,
        lastName: 1,
        userStatus: 1,
        createdBy: 1
      }
    });
  }

  //Not authorized to access trainers clients
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
