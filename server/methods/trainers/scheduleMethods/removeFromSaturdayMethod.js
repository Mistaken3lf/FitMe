Meteor.methods({
  resetSaturdaysSchedule(saturdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      Meteor.users.update({
        _id: saturdaysItem
      }, {
        $set: {
          saturdaysScheduleStart: "",
          saturdaysScheduleEnd: "",
          saturdayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
