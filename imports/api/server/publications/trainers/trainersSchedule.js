Meteor.publish('trainer.schedule', function () {
  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Find the trainers master schedule
    return Meteor.users.find({
      roles: 'client',
      createdBy: this.userId,
    }, {
      fields: {
        username: 1,
        sessionDate: 1,
        firstName: 1,
        lastName: 1,
        mondaysScheduleStart: 1,
        tuesdaysScheduleStart: 1,
        wednesdaysScheduleStart: 1,
        thursdaysScheduleStart: 1,
        fridaysScheduleStart: 1,
        saturdaysScheduleStart: 1,
        sundaysScheduleStart: 1,
        mondaysScheduleEnd: 1,
        tuesdaysScheduleEnd: 1,
        wednesdaysScheduleEnd: 1,
        thursdaysScheduleEnd: 1,
        fridaysScheduleEnd: 1,
        saturdaysScheduleEnd: 1,
        sundaysScheduleEnd: 1,
        userStatus: 1,
        mondayDescription: 1,
        tuesdayDescription: 1,
        wednesdayDescription: 1,
        thursdayDescription: 1,
        fridayDescription: 1,
        saturdayDescription: 1,
        sundayDescription: 1,
        mondayStatus: 1,
        tuesdayStatus: 1,
        wednesdayStatus: 1,
        thursdayStatus: 1,
        fridayStatus: 1,
        saturdayStatus: 1,
        sundayStatus: 1
      }
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
