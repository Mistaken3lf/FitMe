Meteor.publish('allClients', function() {
  //If the user is an admin and logged in
  if (this.userId && Roles.userIsInRole(this.userId, "admin")) {
    //Find all my clients
    return Meteor.users.find({
      roles: 'client'
    }, {
      fields: {
        username: 1,
        "emails.address": 1,
        "userProfile.firstName": 1,
        "userProfile.lastName": 1,
        userStatus: 1,
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
