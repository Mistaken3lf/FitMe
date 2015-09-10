Meteor.publish('currentClientsCardio', function (currentClientsId) {
  //Make sure the user is a trainer and logged in before publishing
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    //Find a specific clients cardio based on the url param
    //from flow router passed in as currentClientsId
    return ClientCardio.find({whosCardio: currentClientsId});
  }

  //User is not authorized to access clients cardio
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
