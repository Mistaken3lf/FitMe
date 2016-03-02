const UpdateSundaysStatus = new ValidatedMethod({
  name: "updateSundaysStatus",

  //Validate the field being updated, the actual data,
  //and the clients id
  validate: new SimpleSchema({
    sundayStatus: {
      type: Boolean
    }
  }).validator(),

  run({
    sundayStatus
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
          sundayStatus: sundayStatus,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
