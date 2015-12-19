Meteor.methods({
  updateClientSchedule(updatedSchedule, clientId) {
    //Make sure user is logged in and a trainer before performing
    //the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account is suspended");
      }
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