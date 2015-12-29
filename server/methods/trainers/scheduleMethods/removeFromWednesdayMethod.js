Meteor.methods({
  resetWednesdaysSchedule(wednesdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

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
