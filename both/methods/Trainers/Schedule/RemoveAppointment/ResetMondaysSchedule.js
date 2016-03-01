const ResetMondaysSchedule = new ValidatedMethod({
  name: "resetMondaysSchedule",

  //Validate the clients id
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Find the current trainer
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //Find the trainers client
      const trainersClient = Meteor.users.findOne({
        _id: id
      });

      //Make sure trainer is not suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      //Make sure the trainer owns the client
      if (trainersClient.createdBy == this.userId) {
        //Reset mondays schedule
        Meteor.users.update({
          _id: id
        }, {
          $set: {
            mondaysScheduleStart: "",
            mondaysScheduleEnd: "",
            mondayDescription: "",
            mondayStatus: false
          }
        });
      }

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
