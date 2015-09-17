Meteor.methods({
  //Update my workout
  updateMyWorkout: function (updatedWorkout, clientId) {
    //Make sure the user is a client and logged in
    if(!Meteor.userId() &&  Roles.userIsInRole(this.userId, "client")) {
      throw new Meteor.Error("not-authorized");
    }

    //Check the data on the server against the workout schema
    //to make sure its valid
    check(updatedWorkout, ClientWorkout.simpleSchema());

    //Update the clients workout with the new info
    ClientWorkout.update(clientId, updatedWorkout);
  }
});
