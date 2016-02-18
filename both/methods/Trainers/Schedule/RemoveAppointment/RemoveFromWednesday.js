Meteor.methods({
  resetWednesdaysSchedule(wednesdaysItem) {
    new SimpleSchema({
      wednesdaysItem: {
        type: String
      }
    }).validate({
      wednesdaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersClient = Meteor.users.findOne({
        _id: wednesdaysItem
      });

      //Make sure the trainer is not suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }
      
      //Make sure the trainer owns the client
      if (trainersClient.createdBy != this.userId) {
        throw new Meteor.Error("Sorry, this is not your client");
      }
      
      //Reset wednesdays schedule
      Meteor.users.update({
        _id: wednesdaysItem
      }, {
        $set: {
          wednesdaysScheduleStart: "",
          wednesdaysScheduleEnd: "",
          wednesdayDescription: "",
          wednesdayStatus: false
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
