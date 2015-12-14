Meteor.methods({
  updateClientSchedule(updatedSchedule, clientId) {
    //Make sure user is logged in and a trainer before performing
    //the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let thisClient = Meteor.users.findOne({
        _id: clientId
      });

      if (thisClient.createdBy == this.userId) {
        //Update the clients schedule with the new info
        Meteor.users.update(clientId, updatedSchedule);
      }

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});