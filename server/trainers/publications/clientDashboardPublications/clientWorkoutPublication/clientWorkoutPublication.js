Meteor.publish('currentClientsWorkout', function (currentClientsId) {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return ClientWorkout.find({whosWorkout: currentClientsId}, {
      fields: {
        whosWorkout: 0,
        createdBy: 0,
      }
    });
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
