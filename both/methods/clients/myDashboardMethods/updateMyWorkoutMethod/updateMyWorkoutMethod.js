Meteor.methods({
  //Update my workout
  updateMyWorkout: function (updatedWorkout, clientId) {
    //Make sure the user is a client and logged in
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "client")) {
      throw new Meteor.Error("not-authorized");
    }

    //Update the clients workout with the new info
    ClientWorkout.update(clientId, updatedWorkout);
  }
});
