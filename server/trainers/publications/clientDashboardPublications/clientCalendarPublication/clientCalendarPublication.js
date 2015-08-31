Meteor.publish('currentClientsCalendar', function (currentClientsId) {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return CalEvents.find({whosCalendar: currentClientsId});
  } else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
