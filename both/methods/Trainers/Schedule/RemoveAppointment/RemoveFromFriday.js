Meteor.methods({
  resetFridaysSchedule(fridaysItem) {
    new SimpleSchema({
      fridaysItem: {
        type: String
      }
    }).validate({
      fridaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersClient = Meteor.users.findOne({
        _id: fridaysItem
      });
      
      //Make sure the trainer is not suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }
      
      //Make sure the trainer owns the client
      if (trainersClient.createdBy != this.userId) {
        throw new Meteor.Error("Sorry, this is not your client");
      }
      
      //Reset fridays schedule
      Meteor.users.update({
        _id: fridaysItem
      }, {
        $set: {
          fridaysScheduleStart: "",
          fridaysScheduleEnd: "",
          fridayDescription: "",
          fridayStatus: false
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
