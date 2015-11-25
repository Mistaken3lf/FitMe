Meteor.methods({
  updateClientSchedule: function (updatedSchedule, clientId) {
    //Make sure user is logged in and a trainer before performing
    //the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Update the clients profile with the new info
      Meteor.users.update(clientId, updatedSchedule);
      
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});