Meteor.methods({
  //updatedProfile, the new client information
  //clientId, id of client to update
  updateClientsProfile: function (updatedProfile, clientId) {

    //Make sure user is logged in
    if(!Meteor.userId() &&  Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Make sure data is valid
    check(updatedProfile, Meteor.users.simpleSchema());

    //Update the clients profile with the new info
    Meteor.users.update(clientId, updatedProfile);
  }
});
