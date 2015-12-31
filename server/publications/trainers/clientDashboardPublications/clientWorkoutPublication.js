Meteor.publish('currentClientsWorkout', function (currentClientsId) {
  //Check the id against the server to make sure its valid
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
  }

  //Not authorized to  access clients workout data
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
