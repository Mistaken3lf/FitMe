Meteor.methods({
  deleteAccount() {
    if (Roles.userIsInRole(this.userId, "trainer")) {
       Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          userStatus: "deleted"
        }
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});