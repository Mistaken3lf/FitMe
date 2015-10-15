Meteor.publish('allUsers', function() {
  //If the user is an admin and logged in
  if (this.userId && Roles.userIsInRole(this.userId, "admin")) {
    //Find all my users
    return Meteor.users.find();
  }

  //User is not authorized to access this publication
  else {
    throw new Meteor.Error("not-authorized");

    //Return ready to the router is not waiting for nothing
    return this.ready();
  }
});
