Meteor.publish('currentClientsProfile', function (currentClientsId) {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    //Publish a specific clients profile based on the flow router url param
    //currentClientsId.
    return Meteor.users.find({roles: 'client', "userProfile.whosProfile": currentClientsId}, {
      fields: {
        username: 1,
        sessionDate: 1,
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
      }});
    }

    //Not authorized to access clients profile info
    else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
