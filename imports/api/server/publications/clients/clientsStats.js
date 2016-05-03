Meteor.publish('clients.stats', function () {
  if (Roles.userIsInRole(this.userId, "client")) {
    //Find the logged in clients stats
    return ClientStats.find({
      whosStats: this.userId
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
