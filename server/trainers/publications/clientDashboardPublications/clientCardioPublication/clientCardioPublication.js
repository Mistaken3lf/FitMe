Meteor.publish('currentClientsCardio', function (currentClientsId) {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    //Find a specific clients cardio based on the url param
    //from flow router passed in as currentClientsId
    return ClientCardio.find({whosCardio: currentClientsId});
  }

  //User is not authorized to access clients info
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
