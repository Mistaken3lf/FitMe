Meteor.publish('currentClientsCardio', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return ClientCardio.find({createdBy: this.userId});
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
