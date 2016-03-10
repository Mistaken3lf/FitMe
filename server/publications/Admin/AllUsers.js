Meteor.publish('allUsers', function () {
  //If the user is an admin and logged in
  if (Roles.userIsInRole(this.userId, "admin")) {
    //Find all my users
    return Meteor.users.find({}, {
      fields: {
        username: 1,
        "emails.address": 1,
        firstName: 1,
        lastName: 1,
        userStatus: 1,
        planType: 1,
        expiresOn: 1,
        clientLimit: 1,
        roles: 1,
        datePurchased: 1
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
