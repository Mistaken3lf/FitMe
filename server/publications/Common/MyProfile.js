Meteor.publish('myProfile', function () {
  //If the user is logged in then publish their fields
  if (this.userId) {
    //Find the logged in user
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        username: 1,
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
        sessionDate: 1,
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
        mondayStatus: 1,
        tuesdayStatus: 1,
        wednesdayStatus: 1,
        thursdayStatus: 1,
        fridayStatus: 1,
        saturdayStatus: 1,
        sundayStatus: 1,
        createdBy: 1,
        planType: 1,
        datePurchased: 1,
        expiresOn: 1,
        clientLimit: 1,
        hasPaid: 1,
        userStatus: 1,
        profilePicture: 1
      }
    });
  }

  //User is not authorized to access this publication
  else {
    throw new Meteor.Error("not-authorized");

    //Return ready to the router is not waiting for nothing
    return this.ready();
  }
});
