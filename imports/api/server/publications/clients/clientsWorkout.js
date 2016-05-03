Meteor.publish('myWorkout', function () {
  if (Roles.userIsInRole(this.userId, "client")) {
    //Find my workout
    return ClientWorkout.find({
      whosWorkout: this.userId
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
