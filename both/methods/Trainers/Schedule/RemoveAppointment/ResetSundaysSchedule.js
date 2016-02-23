const ResetSundaysSchedule = new ValidatedMethod({
  name: "resetSundaysSchedule",

  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersClient = Meteor.users.findOne({
        _id: id
      });

      //Make sure the trainer is not suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      //Make sure the trainer owns the client
      if (trainersClient.createdBy == this.userId) {
        //Reset sundays schedule
        Meteor.users.update({
          _id: id
        }, {
          $set: {
            sundaysScheduleStart: "",
            sundaysScheduleEnd: "",
            sundayDescription: "",
            sundayStatus: false
          }
        });
      }

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
