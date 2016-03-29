Meteor.publish('trainersClients', function (currentTrainerId) {
  new SimpleSchema({
    currentTrainerId: {
      type: String
    }
  }).validate({
    currentTrainerId
  });

  if (Roles.userIsInRole(this.userId, "admin")) {
    //Find a specific trainer based on the flow router
    //param passed in as currentTrainerId
    return Meteor.users.find({
      roles: 'client',
      createdBy: currentTrainerId,
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
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
