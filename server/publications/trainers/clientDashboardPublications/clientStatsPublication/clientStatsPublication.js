Meteor.publish('currentClientsStats', function (currentClientsId) {
  //Check that the id is valid against the server
  check(currentClientsId, String);

  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Check that the id is valid against the server
    check(currentClientsId, String);

    //Find a specific clients stats based on the currrentClientsId
    //passed in from flow router.
    return ClientStats.find({
      whosStats: currentClientsId
    });
  }

  //Not authorized to access clients stats
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
