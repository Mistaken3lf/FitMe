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
        whosProfile: 1,
        sessionDate: 1,
        sessionsRemaining: 1,
        paymentDue: 1,
        mondaysSchedule: 1,
        tuesdaysSchedule: 1,
        wednesdaysSchedule: 1,
        thursdaysSchedule: 1,
        fridaysSchedule: 1,
        saturdaysSchedule: 1,
        sundaysSchedule: 1,
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
