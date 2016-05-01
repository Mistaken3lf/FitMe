Meteor.publish('currentClientsProfile', function (currentClientsId) {
  new SimpleSchema({
    currentClientsId: {
      type: String
    }
  }).validate({
    currentClientsId
  });

  if (Roles.userIsInRole(this.userId, "trainer")) {
    //Publish a specific clients profile based on the flow router url param
    //currentClientsId.
    return Meteor.users.find({
      roles: 'client',
      whosProfile: currentClientsId
    }, {
      fields: {
        username: 1,
        sessionDate: 1,
        "emails.address": 1,
        firstName: 1,
        lastName: 1,
        birthday: 1,
        address: 1,
        city: 1,
        state: 1,
        zip: 1,
        homePhone: 1,
        workPhone: 1,
        emergencyContact: 1,
        bio: 1,
        fitnessGoals: 1,
        whosProfile: 1,
        sessionsRemaining: 1,
        paymentDue: 1,
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
        mondayDescription: 1,
        tuesdayDescription: 1,
        wednesdayDescription: 1,
        thursdayDescription: 1,
        fridayDescription: 1,
        saturdayDescription: 1,
        sundayDescription: 1,
        profilePicture: 1
      }
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
