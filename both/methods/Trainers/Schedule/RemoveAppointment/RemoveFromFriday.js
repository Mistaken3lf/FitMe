Meteor.methods({
  resetFridaysSchedule(id) {
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
        //Reset fridays schedule
        Meteor.users.update({
          _id: id
        }, {
          $set: {
            fridaysScheduleStart: "",
            fridaysScheduleEnd: "",
            fridayDescription: "",
            fridayStatus: false
          }
        });
      }

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
