////////////////////////////////////////////////////////////////////////////////
Meteor.publish('currentClientsWorkout', function (currentClientsId) {
  //Make sure the user is logged in and a trainer before publishing
  if (this.userId && Roles.userIsInRole(this.userId, "trainer")) {
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
////////////////////////////////////////////////////////////////////////////////
