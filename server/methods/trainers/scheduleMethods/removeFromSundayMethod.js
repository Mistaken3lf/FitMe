Meteor.methods({
  resetSundaysSchedule(sundaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      Meteor.users.update({
        _id: sundaysItem
      }, {
        $set: {
          sundaysScheduleStart: "",
          sundaysScheduleEnd: "",
          sundayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
