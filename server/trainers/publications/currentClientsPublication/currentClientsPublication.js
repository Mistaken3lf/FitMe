Meteor.publish('currentClients', function () {
  if(this.userId && Roles.userIsInRole(this.userId, "trainer")) {
    //Find all clients that the logged in user has created and that belongs
    //to them.
    return Meteor.users.find({roles: 'client', "userProfile.createdBy": this.userId}, {
      fields: {
        username: 1,
        "emails.address": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
      }});
    }

    //Not authorized to access trainers clients
    else {
      throw new Meteor.Error("not-authorized");
      return this.ready();
    }
});
