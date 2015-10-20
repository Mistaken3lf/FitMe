Meteor.methods({
  //Update the clients stats with the clientId passed in from
  //flow router
  updateClientsStats: function (updatedStats, clientId) {
    //Make sure user is logged in and a trainer before performing the method
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Check the data against the stats schema on the server to
    //make sure its valid
    check(updatedStats, ClientStats.simpleSchema());

    //Update the clients profile with the new info
    ClientStats.update(clientId, updatedStats);
  }
});
