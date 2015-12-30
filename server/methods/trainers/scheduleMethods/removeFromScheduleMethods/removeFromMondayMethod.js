Meteor.methods({
  resetMondaysSchedule(mondaysItem) {
    new SimpleSchema({
      mondaysItem: {
        type: String
      }
    }).validate({
      mondaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });
      
      const trainersClient = Meteor.users.findOne({
        _id: mondaysItem
      });

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }
      
      if(trainersClient.createdBy != this.userId) {
        throw new Meteor.Error("Sorry, this is not your client");
      }

      Meteor.users.update({
        _id: mondaysItem
      }, {
        $set: {
          mondaysScheduleStart: "",
          mondaysScheduleEnd: "",
          mondayDescription: "",
          mondayStatus: false
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
