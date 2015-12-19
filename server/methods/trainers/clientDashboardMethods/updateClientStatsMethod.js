Meteor.methods({
  //Update the clients stats with the clientId passed in from
  //flow router
  updateClientsStats(updatedStats, clientId) {
    //Make sure user is logged in and a trainer before performing the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account is suspended");
      }
      let clientsStats = ClientStats.findOne({
        createdBy: this.userId
      });

      if (clientsStats.createdBy == this.userId) {
        //Update the clients profile with the new info
        ClientStats.update(clientId, updatedStats);
      }

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
