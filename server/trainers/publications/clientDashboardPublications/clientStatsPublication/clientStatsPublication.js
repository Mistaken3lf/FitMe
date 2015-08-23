Meteor.publish('currentClientsStats', function (currentClientsId) {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return ClientStats.find({whosStats: currentClientsId});
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
