Meteor.publish('trainerSchedule', function () {
  if (this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return Meteor.users.find({
      roles: 'client',
      "userProfile.createdBy": this.userId,
    }, {
      fields: {
        username: 1,
        sessionDate: 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
        "userProfile.mondaysSchedule": 1,
        "userProfile.tuesdaysSchedule": 1,
        "userProfile.wednesdaysSchedule": 1,
        "userProfile.thursdaysSchedule": 1,
        "userProfile.fridaysSchedule": 1,
        "userProfile.saturdaysSchedule": 1,
        "userProfile.sundaysSchedule": 1,
        userStatus: 1,
      }
    });
  }

  //Not authorized to access trainers clients
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
