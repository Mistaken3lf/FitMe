Meteor.publish('currentClientsStats', function(currentClientsId) {
  //Make sure the user is logged in and a trainer before publishing
  if (this.userId && Roles.userIsInRole(this.userId, "trainer")) {
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
