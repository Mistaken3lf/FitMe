Meteor.methods({
  //Update my workout
  updateMyWorkout(updatedWorkout, clientId) {
    //Make sure the user is a client and logged in
    if (Roles.userIsInRole(this.userId, "client")) {
      //Find the current client
      let currentUser = Meteor.users.findOne({
        _id: clientId
      });

      if (currentUser.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account has been suspended");
      }
      
      //Update the clients workout with the new info
      ClientWorkout.update(clientId, updatedWorkout);

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
