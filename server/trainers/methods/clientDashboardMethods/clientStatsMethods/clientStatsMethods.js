Meteor.methods({
  //updatedProfile, the new client information
  //clientId, id of client to update
  updateClientsStats: function (updatedStats, clientId) {

    //Make sure user is logged in
    if(!Meteor.userId() &&  Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Make sure data is valid
    check(updatedStats, ClientStats.simpleSchema());

    //Update the clients profile with the new info
    ClientStats.update(clientId, updatedStats);
  }
});
