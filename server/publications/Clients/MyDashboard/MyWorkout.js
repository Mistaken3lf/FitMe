Meteor.publish('myWorkout', function () {
  //Make sure the user is logged in and a client before publishing
  if (Roles.userIsInRole(this.userId, "client")) {
    //Find my workout
    return ClientWorkout.find({
      whosWorkout: this.userId
    });
  }

  //Not authorized to access my workout data
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
