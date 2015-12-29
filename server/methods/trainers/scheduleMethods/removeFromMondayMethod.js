Meteor.methods({
  resetMondaysSchedule(mondaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });
      
      if(thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }
      
      Meteor.users.update({
        _id: mondaysItem
      }, {
        $set: {
          mondaysScheduleStart: "",
          mondaysScheduleEnd: "",
          mondayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
