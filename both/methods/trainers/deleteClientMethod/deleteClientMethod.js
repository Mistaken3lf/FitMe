Meteor.methods({
  deleteClient: function (clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Remove cardio of the client being deleted
    ClientCardio.remove({
      whosCardio: clientId
    });

    //Remove stats of the client being deleted
    ClientStats.remove({
      whosStats: clientId
    });

    //Remove workout of client being deleted
    ClientWorkout.remove({
      whosWorkout: clientId
    });

    //Delete the client clicked on
    Meteor.users.remove(clientId);
  }
});
