////////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  //Update the clients workout with the clientId passed in from flow router
  updateClientsWorkout: function (updatedWorkout, clientId) {
    //Make sure the user is logged in and a trainer before performing the
    //method
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Check the data on the server against the workout schema
    //to make sure its valid
    check(updatedWorkout, ClientWorkout.simpleSchema());

    //Update the clients workout with the new info
    ClientWorkout.update(clientId, updatedWorkout);
  }
});
////////////////////////////////////////////////////////////////////////////////
