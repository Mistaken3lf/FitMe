Meteor.publish('myStats', function() {
  //Make sure the user is a client and logged in before publishing
  //their stats
  if (this.userId && Roles.userIsInRole(this.userId, "client")) {
    //Find the logged in clients stats
    return ClientStats.find({
      whosStats: this.userId
    });
  }

  //Not authorized to access clients stats
  else {
    throw new Meteor.Error("not-authorized");

    //Return ready so flow router is not waiting for nothing
    return this.ready();
  }
});
