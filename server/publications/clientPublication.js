Meteor.publish('currentClients', function () {
  if(this.userId) {
    return Meteor.users.find({roles: 'client', "profile.createdBy": this.userId}, {
      fields: {
        username: 1,
        "emails.address": 1,
        "profile.firstName": 1,
        "profile.lastName": 1,
      }});
    }

    else {
      throw new Meteor.Error("not-authorized");
    }
});
