Meteor.methods({
  resetWednesdaysSchedule(wednesdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {

      Meteor.users.update({
        _id: wednesdaysItem
      }, {
        $set: {
          wednesdaysScheduleStart: "",
          wednesdaysScheduleEnd: "",
          wednesdayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
