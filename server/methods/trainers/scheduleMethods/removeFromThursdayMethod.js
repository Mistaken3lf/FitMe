Meteor.methods({
  resetThursdaysSchedule(thursdaysItem) {
    new SimpleSchema({
      thursdaysItem: {
        type: String
      }
    }).validate({
      thursdaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
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
          thursdayDescription: "",
          thursdayStatus: false
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
