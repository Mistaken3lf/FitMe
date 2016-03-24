Meteor.publish('currentClientsStats', function (currentClientsId) {
  new SimpleSchema({
    currentClientsId: {
      type: String
    }
  }).validate({
    currentClientsId
  });

  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Find a specific clients stats based on the currrentClientsId
    //passed in from flow router.
    return ClientStats.find({
      whosStats: currentClientsId
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
