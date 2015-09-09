Meteor.publish('myStats', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "client")) {
    //Find specific clients stats
    return ClientStats.find({whosStats: this.userId});
  }

  //Not authorized to access clients stats
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
    }
});
