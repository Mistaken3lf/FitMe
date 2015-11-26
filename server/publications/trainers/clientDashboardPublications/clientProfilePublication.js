Meteor.publish('currentClientsProfile', function (currentClientsId) {
  //Check that the id is valid against the server
  check(currentClientsId, String);

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

  //Not authorized to access clients profile info
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
