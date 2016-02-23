Meteor.methods({
  resetWednesdaysSchedule(id) {
    new SimpleSchema({
      id: {
        type: String
      }
    }).validate({
      id
    });

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
        //Reset wednesdays schedule
        Meteor.users.update({
          _id: id
        }, {
          $set: {
            wednesdaysScheduleStart: "",
            wednesdaysScheduleEnd: "",
            wednesdayDescription: "",
            wednesdayStatus: false
          }
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
