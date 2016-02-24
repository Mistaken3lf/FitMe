const deleteAccount = new ValidatedMethod({
  name: "deleteAccount",

  validate: null,

  run() {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          userStatus: "deleted"
        }
      });

      //Set the users status to deleted but dont actually delete them
      Meteor.users.update({
        createdBy: this.userId
      }, {
        $set: {
          userStatus: "deleted",
        }
      }, {
        multi: true
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});