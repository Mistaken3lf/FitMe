Meteor.methods({
  resetSaturdaysSchedule: function (saturdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {

      Meteor.users.update({
        _id: saturdaysItem
      }, {
        $set: {
          saturdaysScheduleStart: "",
          saturdaysScheduleEnd: "",
          saturdayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
