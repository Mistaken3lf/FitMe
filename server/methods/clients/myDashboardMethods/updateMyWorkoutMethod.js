Meteor.methods({
  //Update my workout
  updateMyWorkout(updatedWorkout, clientId) {
    //Make sure the user is a client and logged in
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }
      //Update the clients workout with the new info
      ClientWorkout.update(clientId, updatedWorkout);

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
