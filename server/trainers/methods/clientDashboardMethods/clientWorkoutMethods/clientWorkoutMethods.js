Meteor.methods({
  //Update the clients workout document with the info supplied
  //in the dashboard workout tab.
  updateClientsWorkout: function (updatedWorkout, clientId) {

    //Make sure user is logged in
    if(!Meteor.userId() &&  Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Make sure data is valid
    check(updatedWorkout, ClientWorkout.simpleSchema());

    //Update the clients workout with the new info
    ClientWorkout.update(clientId, updatedWorkout);
  }
});
