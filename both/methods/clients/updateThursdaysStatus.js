const updateThursdaysStatus = new ValidatedMethod({
  name: "updateThursdaysStatus",

  validate: new SimpleSchema({
    thursdayStatus: {
      type: Boolean
    }
  }).validator(),

  run({
    thursdayStatus
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
          thursdayStatus: thursdayStatus,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
