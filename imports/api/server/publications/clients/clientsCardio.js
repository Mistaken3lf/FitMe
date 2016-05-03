Meteor.publish('clients.cardio', function () {
  if (Roles.userIsInRole(this.userId, "client")) {
    //Find the logged in clients cardio
    return ClientCardio.find({
      whosCardio: this.userId
    });
  } else {
    throw new Meteor.Error("not-authorized");
  }
});
