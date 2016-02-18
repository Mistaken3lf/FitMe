Meteor.methods({
  resetSundaysSchedule(sundaysItem) {
    new SimpleSchema({
      sundaysItem: {
        type: String
      }
    }).validate({
      sundaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersClient = Meteor.users.findOne({
        _id: sundaysItem
      });
      
      //Make sure the trainer is not suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }
      
      //Make sure the trainer owns the client
      if (trainersClient.createdBy != this.userId) {
        throw new Meteor.Error("Sorry, this is not your client");
      }
      
      //Reset sundays schedule
      Meteor.users.update({
        _id: sundaysItem
      }, {
        $set: {
          sundaysScheduleStart: "",
          sundaysScheduleEnd: "",
          sundayDescription: "",
          sundayStatus: false
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
