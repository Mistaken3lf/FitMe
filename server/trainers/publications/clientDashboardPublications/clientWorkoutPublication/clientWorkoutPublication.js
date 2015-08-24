Meteor.publish('currentClientsWorkout', function (currentClientsId) {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return ClientWorkout.find({whosWorkout: currentClientsId});
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
