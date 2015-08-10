Meteor.publish('currentClients', function () {
  if(this.userId) {
    return Meteor.users.find({roles: 'client', "profile.createdBy": this.userId}, {
      fields: {
        username: 1,
        "emails.address": 1,
        "profile.firstName": 1,
        "profile.lastName": 1,
        "profile.birthday": 1,
        "profile.address": 1,
        "profile.city": 1,
        "profile.state": 1,
        "profile.zip": 1,
        "profile.homePhone": 1,
        "profile.cellPhone": 1,
        "profile.workPhone": 1,
        "profile.emergencyContact": 1,
        "profile.bio": 1,
        "profile.fitnessGoals": 1,
      }});
    }

    else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
