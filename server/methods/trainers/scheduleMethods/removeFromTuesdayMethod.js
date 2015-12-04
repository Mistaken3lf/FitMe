Meteor.methods({
  resetTuesdaysSchedule: function (tuesdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {

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
