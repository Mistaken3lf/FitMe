Meteor.publish('currentClientsCardio', function (currentClientsId) {
  //Make sure the user is a trainer and logged in before publishing
  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Check that the id is valid against the server
    check(currentClientsId, String);

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
