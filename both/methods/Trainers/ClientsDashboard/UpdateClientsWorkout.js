Meteor.methods({
  //Update the clients workout with the clientId passed in from flow router
  updateClientsWorkout(updatedWorkout, clientId) {
    //Make sure the user is logged in and a trainer before performing the
    //method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });
      
      //Prevent trainer from making updates to the clients workout
      //if they are suspended
      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account is suspended");
      }
      
      const clientsWorkout = ClientWorkout.findOne({
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
