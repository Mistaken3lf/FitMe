Meteor.methods({
  resetFridaysSchedule(fridaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
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
