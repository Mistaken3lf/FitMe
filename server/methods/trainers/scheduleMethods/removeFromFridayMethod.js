Meteor.methods({
  resetFridaysSchedule: function (fridaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      Meteor.users.update({
        _id: fridaysItem
      }, {
        $set: {
          fridaysScheduleStart: "",
          fridaysScheduleEnd: "",
          fridayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
