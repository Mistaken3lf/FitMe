Meteor.methods({
  resetSundaysSchedule: function (sundaysItem) {
    if (Roles.userIsInRole(this.userId, "trainer")) {

      Meteor.users.update({
        _id: sundaysItem
      }, {
        $set: {
          sundaysScheduleStart: "",
          sundaysScheduleEnd: "",
          sundayDescription: ""
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
