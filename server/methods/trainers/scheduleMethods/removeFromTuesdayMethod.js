Meteor.methods({
  resetTuesdaysSchedule(tuesdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      Meteor.users.update({
        _id: tuesdaysItem
      }, {
        $set: {
          tuesdaysScheduleStart: "",
          tuesdaysScheduleEnd: "",
          tuesdayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
