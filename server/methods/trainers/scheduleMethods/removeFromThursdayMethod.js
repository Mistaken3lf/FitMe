Meteor.methods({
  resetThursdaysSchedule(thursdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      Meteor.users.update({
        _id: thursdaysItem
      }, {
        $set: {
          thursdaysScheduleStart: "",
          thursdaysScheduleEnd: "",
          thursdayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
