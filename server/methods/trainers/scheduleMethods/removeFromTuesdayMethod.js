Meteor.methods({
  resetTuesdaysSchedule(tuesdaysItem) {
    new SimpleSchema({
        tuesdaysItem: {
          type: String
        }
      }).validate({
        tuesdaysItem
      });
    
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
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
          tuesdayDescription: "",
          tuesdayStatus: false
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
