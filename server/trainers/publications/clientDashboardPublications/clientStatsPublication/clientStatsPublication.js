Meteor.publish('currentClientsStats', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return ClientStats.find({createdBy: this.userId});
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
