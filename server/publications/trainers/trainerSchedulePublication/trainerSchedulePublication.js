Meteor.publish('trainerSchedule', function () {
  if (Roles.userIsInRole(this.userId, "trainer")) {
    return Meteor.users.find({
      roles: 'client',
      createdBy: this.userId,
    }, {
      fields: {
        username: 1,
        sessionDate: 1,
        firstName: 1,
        lastName: 1,
        mondaysSchedule: 1,
        tuesdaysSchedule: 1,
        wednesdaysSchedule: 1,
        thursdaysSchedule: 1,
        fridaysSchedule: 1,
        saturdaysSchedule: 1,
        sundaysSchedule: 1,
        userStatus: 1,
      }
    });
  }

  //Not authorized to access trainers clients
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
