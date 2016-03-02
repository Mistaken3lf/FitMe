const UpdateWednesdaysStatus = new ValidatedMethod({
  name: "updateWednesdaysStatus",

  //Validate the field being updated, the actual data,
  //and the clients id
  validate: new SimpleSchema({
    wednesdayStatus: {
      type: Boolean
    }
  }).validator(),

  run({
    wednesdayStatus
  }) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });

      //Check if the client is suspended and prevent them from changing status
      if (thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }

      //Update fridays status
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          wednesdayStatus: wednesdayStatus,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
