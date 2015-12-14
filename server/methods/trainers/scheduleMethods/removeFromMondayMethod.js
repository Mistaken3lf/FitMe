Meteor.methods({
  resetMondaysSchedule(mondaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {

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
