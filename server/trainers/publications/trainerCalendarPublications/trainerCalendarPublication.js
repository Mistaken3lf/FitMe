Meteor.publish('trainerCalendarPublication', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return ClientWorkout.find({createdBy: this.userId});
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
