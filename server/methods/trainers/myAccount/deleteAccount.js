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