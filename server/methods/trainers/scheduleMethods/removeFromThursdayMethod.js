Meteor.methods({
  resetThursdaysSchedule: function (thursdaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {

      Meteor.users.update({
        _id: thursdaysItem
      }, {
        $set: {
          thursdaysScheduleStart: "",
          thursdaysScheduleEnd: "",
          thursdayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
