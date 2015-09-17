////////////////////////////////////////////////////////////////////////////////
Meteor.publish('trainerSchedule', function() {
  //Make sure the user is logged in and a trainer before publishing
  if (this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    //Find all clients session meeting days and return them to be
    //displayed on the trainers calendar
    return Meteor.users.find({
      roles: 'client',
      "userProfile.createdBy": this.userId
    }, {
      fields: {
        username: 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
        "userProfile.whosProfile": 1,
        "userProfile.sessionsRemaining": 1,
        "userProfile.paymentDue": 1,
        sessionDate: 1,
      }
    });
  }

  //Not authorized to access the trainers schedule publication
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
////////////////////////////////////////////////////////////////////////////////
