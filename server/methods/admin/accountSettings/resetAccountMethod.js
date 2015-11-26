Meteor.methods({
  resetAccount: function (trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let today = new Date();
      
      Meteor.users.update({
        _id: trainerId
      }, {
        $set: {
          clientLimit: 1,
          planType: "Free",
          datePurchased: today.toDateString(),
          expiresOn: today.toDateString()
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});