Meteor.publish('myProfile', function () {
  if(this.userId) {
    return Meteor.users.find({_id: this.userId}, {
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
      }});
    }

    else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
