////////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  //Update the clients profile with the clientId passed in from
  //flow router
  updateClientsProfile: function (updatedProfile, clientId) {

    //Make sure user is logged in and a trainer before performing
    //the method
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Check the data against the user schema on the server
    //to make sure its valid
    check(updatedProfile, Meteor.users.simpleSchema());

    //Update the clients profile with the new info
    Meteor.users.update(clientId, updatedProfile);
  }
});
////////////////////////////////////////////////////////////////////////////////
