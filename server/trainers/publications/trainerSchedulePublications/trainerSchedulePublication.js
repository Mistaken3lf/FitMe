Meteor.publish('trainerSchedule', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    return Meteor.users.find({roles: 'client', "userProfile.createdBy": this.userId}, {
      fields: {
        username: 1,
        "emails.address": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
        "userProfile.birthday": 1,
        "userProfile.address": 1,
        "userProfile.city": 1,
        "userProfile.state": 1,
        "userProfile.zip": 1,
        "userProfile.homePhone": 1,
        "userProfile.workPhone": 1,
        "userProfile.emergencyContact": 1,
        "userProfile.bio": 1,
        "userProfile.fitnessGoals": 1,
        "userProfile.whosProfile": 1,
        "userProfile.sessionsRemaining": 1,
        "userProfile.paymentDue": 1,
        sessionDate: 1,
      }});
    }

    else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
