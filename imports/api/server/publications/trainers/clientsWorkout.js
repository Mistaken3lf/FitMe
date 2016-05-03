Meteor.publish('trainer.clientsWorkout', function (currentClientsId) {
  new SimpleSchema({
    currentClientsId: {
      type: String
    }
  }).validate({
    currentClientsId
  });

  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Find a specific clients workout based on currentClientsId passed
    //in from flow router.
    return ClientWorkout.find({
      whosWorkout: currentClientsId
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
