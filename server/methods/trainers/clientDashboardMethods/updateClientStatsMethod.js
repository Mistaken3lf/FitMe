Meteor.methods({
  //Update the clients stats with the clientId passed in from
  //flow router
  updateClientsStats: function (updatedStats, clientId) {
    //Make sure user is logged in and a trainer before performing the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Update the clients profile with the new info
      ClientStats.update(clientId, updatedStats);
      
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
