Meteor.methods({
  //Update the clients profile with the clientId passed in from
  //flow router
  updateClientsProfile(updatedProfile, clientId) {
    let currentTrainer = Meteor.users.findOne({
      _id: this.userId
    });

    if (currentTrainer.userStatus == "suspended") {
      throw new Meteor.Error("Your account is suspended");
    }

    //Make sure user is logged in and a trainer before performing
    //the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let thisClient = Meteor.users.findOne({
        _id: clientId
      });

      if (thisClient.createdBy == this.userId) {
        //Update the clients profile with the new info
        Meteor.users.update(clientId, updatedProfile);
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
