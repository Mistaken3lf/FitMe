Meteor.publish('myStats', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "client")) {
    //Find a specific clients stats based on the currrentClientsId
    //passed in from flow router.
    return ClientStats.find({whosStats: this.userId});
  }

  //Not authorized to access clients stats
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
    }
});
