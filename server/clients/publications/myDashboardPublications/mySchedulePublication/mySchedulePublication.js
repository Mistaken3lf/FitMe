Meteor.publish('mySchedule', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "client")) {
    //Find all clients session meeting days and return them to be
    //displayed on the clients calendar
    return Meteor.users.find({roles: 'client', "userProfile.whosProfile": this.userId}, {
      fields: {
        username: 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
        "userProfile.whosProfile": 1,
        "userProfile.sessionsRemaining": 1,
        "userProfile.paymentDue": 1,
        sessionDate: 1,
      }});
    }

    //Not authorized to access the trainers schedule publication
    else {
      throw new Meteor.Error("not-authorized");

      //Return ready so flow rotuer is not waiting for nothing
      return this.ready();
    }
});
