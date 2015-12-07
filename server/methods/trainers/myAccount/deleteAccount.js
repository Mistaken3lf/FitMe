Meteor.methods({
  deleteAccount: function () {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Remove cardio of the client being deleted
      ClientCardio.remove({
        createdBy: this.userId
      });

      //Remove stats of the client being deleted
      ClientStats.remove({
        createdBy: this.userId
      });

      //Remove workout of client being deleted
      ClientWorkout.remove({
        createdBy: this.userId
      });
      
      //Remove clients associated with the current trainer you are deleting
      Meteor.users.remove({
        createdBy: this.userId
      });
      
      //Remove clients associated with the current trainer
      Meteor.users.remove({
        _id: this.userId
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});