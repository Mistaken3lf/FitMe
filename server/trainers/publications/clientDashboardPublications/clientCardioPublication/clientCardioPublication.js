Meteor.publish('currentClientsCardio', function (currentClientsId) {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return ClientCardio.find({whosCardio: currentClientsId});
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
