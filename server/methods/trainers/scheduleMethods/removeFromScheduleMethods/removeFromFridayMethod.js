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


      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }
      
      if(trainersClient.createdBy != this.userId) {
        throw new Meteor.Error("Sorry, this is not your client");
      }

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
