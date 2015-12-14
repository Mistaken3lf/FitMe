Meteor.methods({
  resetAccount(trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let today = new Date();

      Meteor.users.update({
        _id: trainerId
      }, {
        $set: {
          clientLimit: 1,
          planType: "Free",
          datePurchased: today.toDateString(),
          expiresOn: today.toDateString()
        }
      });

      //Remove clients associated with the current trainer
      Meteor.users.remove({
        createdBy: trainerId
      });

      //Remove cardio of the client being deleted
      ClientCardio.remove({
        createdBy: trainerId
      });

      //Remove stats of the client being deleted
      ClientStats.remove({
        createdBy: trainerId
      });

      //Remove workout of client being deleted
      ClientWorkout.remove({
        createdBy: trainerId
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});