Meteor.methods({
  //Update the clients profile with the clientId passed in from
  //flow router
  updateClientsProfile: function (updatedProfile, clientId) {

    //Make sure user is logged in and a trainer before performing
    //the method
    if (!Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Update the clients profile with the new info
    Meteor.users.update(clientId, updatedProfile);
  }
});
