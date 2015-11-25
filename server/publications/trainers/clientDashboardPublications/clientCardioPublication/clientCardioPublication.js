Meteor.publish('currentClientsCardio', function (currentClientsId) {
  //Check that the id is valid against the server
  check(currentClientsId, String);
  
  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Find a specific clients cardio based on the url param
    //from flow router passed in as currentClientsId
    return ClientCardio.find({
      whosCardio: currentClientsId
    });
  }

  //User is not authorized to access clients cardio
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
