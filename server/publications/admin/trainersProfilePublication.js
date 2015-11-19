Meteor.publish('trainersProfile', function (trainerId) {
  //If the user is logged in then publish their fields
  if (Roles.userIsInRole(this.userId, "admin")) {
    //Find the logged in user
    return Meteor.users.find({
      _id: trainerId
    }, {
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
        "userProfile.whosProfile": 1,
        sessionDate: 1,
        "userProfile.sessionsRemaining": 1,
        "userProfile.paymentDue": 1,
        "userProfile.mondaysSchedule": 1,
        "userProfile.tuesdaysSchedule": 1,
        "userProfile.wednesdaysSchedule": 1,
        "userProfile.thursdaysSchedule": 1,
        "userProfile.fridaysSchedule": 1,
        "userProfile.saturdaysSchedule": 1,
        "userProfile.sundaysSchedule": 1,
      }
    });
  }

  //User is not authorized to access this publication
  else {
    throw new Meteor.Error("not-authorized");

    //Return ready to the router is not waiting for nothing
    return this.ready();
  }
});
