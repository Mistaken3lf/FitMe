Meteor.methods({
  resetSaturdaysSchedule(saturdaysItem) {
    new SimpleSchema({
      saturdaysItem: {
        type: String
      }
    }).validate({
      saturdaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersClient = Meteor.users.findOne({
        _id: saturdaysItem
      });
      
      ///Make sure the trainer is not suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }
      
      //Make sure the trainer owns the client
      if (trainersClient.createdBy != this.userId) {
        throw new Meteor.Error("Sorry, this is not your client");
      }
      
      //Reset saturdays schedule
      Meteor.users.update({
        _id: saturdaysItem
      }, {
        $set: {
          saturdaysScheduleStart: "",
          saturdaysScheduleEnd: "",
          saturdayDescription: "",
          saturdayStatus: false
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
