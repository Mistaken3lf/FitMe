Meteor.methods({
  freeAccountTrainer(trainerId) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(2, "weeks").format("MM/DD/YYYY");

      Meteor.users.update({
        _id: trainerId
      }, {
        $set: {
          clientLimit: 1,
          planType: "Free",
          datePurchased: today,
          expiresOn: expires,
          hasPaid: false,
          userStatus: "active"
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