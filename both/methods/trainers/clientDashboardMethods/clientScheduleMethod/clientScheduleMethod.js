Meteor.methods({
  updateClientSchedule: function (updatedSchedule, clientId) {
    //Make sure user is logged in and a trainer before performing
    //the method
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    //Update the clients profile with the new info
    Meteor.users.update(clientId, updatedSchedule);
  }
});