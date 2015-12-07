Meteor.methods({
  deleteClient: function (clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let thisClient = Meteor.users.findOne({
        _id: clientId
      });

      if (thisClient.createdBy == this.userId) {
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
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
