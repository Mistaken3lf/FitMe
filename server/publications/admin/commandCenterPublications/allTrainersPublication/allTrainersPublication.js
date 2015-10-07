////////////////////////////////////////////////////////////////////////////////
Meteor.publish('allTrainers', function () {
  //If the user is an admin and logged in
  if (this.userId && Roles.userIsInRole(this.userId, "admin")) {
    //Find all my trainers
    return Meteor.users.find({
      roles: 'trainer'
    }, {
        fields: {
          username: 1,
          "emails.address": 1,
          "userProfile.firstName": 1,
          "userProfile.lastName": 1,
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
////////////////////////////////////////////////////////////////////////////////
