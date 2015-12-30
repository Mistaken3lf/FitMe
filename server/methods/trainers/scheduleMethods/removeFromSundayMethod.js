Meteor.methods({
  resetSundaysSchedule(sundaysItem) {
    new SimpleSchema({
      sundaysItem: {
        type: String
      }
    }).validate({
      sundaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
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
          sundayDescription: "",
          sundayStatus: false
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
