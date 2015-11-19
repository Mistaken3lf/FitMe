Meteor.publish('trainersClients', function (currentTrainerId) {
  //Make sure the user is logged in and a admin before publishing
  if (this.userId && Roles.userIsInRole(this.userId, "admin")) {
    //Find a specific trainer based on the flow router
    //param passed in as currentTrainerId
    return Meteor.users.find({
      roles: 'client',
      "userProfile.createdBy": currentTrainerId,
    }, {
      fields: {
        username: 1,
        sessionDate: 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
        userStatus: 1,
      }
    });
  }
  
  //Not authorized to access trainer data
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
