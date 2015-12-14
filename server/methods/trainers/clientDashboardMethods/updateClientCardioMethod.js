Meteor.methods({
  //Update a clients cardio with the clientId passed in from
  //flow router
  updateClientCardio(updatedCardio, clientId) {
    //Make sure the user is a trainer and logged in before performing
    //the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let clientsCardio = ClientCardio.findOne({
        createdBy: this.userId
      });

      if (clientsCardio.createdBy == this.userId) {
        //Update the clients cardio with the new info
        ClientCardio.update(clientId, updatedCardio);
      }

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
