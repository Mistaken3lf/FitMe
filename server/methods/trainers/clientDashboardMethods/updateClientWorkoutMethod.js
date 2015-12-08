Meteor.methods({
  //Update the clients workout with the clientId passed in from flow router
  updateClientsWorkout: function (updatedWorkout, clientId) {
    //Make sure the user is logged in and a trainer before performing the
    //method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let clientsWorkout = ClientWorkout.findOne({
        createdBy: this.userId
      });

      if (clientsWorkout.createdBy == this.userId) {
        //Update the clients workout with the new info
        ClientWorkout.update(clientId, updatedWorkout);
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
