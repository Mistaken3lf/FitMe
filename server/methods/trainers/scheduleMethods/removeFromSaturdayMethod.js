Meteor.methods({
  resetSaturdaysSchedule(saturdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
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
          saturdayDescription: "",
          saturdayStatus: false
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
