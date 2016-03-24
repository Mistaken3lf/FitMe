const updateFridaysStatus = new ValidatedMethod({
  name: "updateFridaysStatus",

  validate: new SimpleSchema({
    fridayStatus: {
      type: Boolean
    }
  }).validator(),

  run({
    fridayStatus
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
          fridayStatus: fridayStatus,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
