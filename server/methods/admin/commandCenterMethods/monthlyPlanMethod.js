Meteor.methods({
  monthlyPlan: function (trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let today = new Date();
      
      Meteor.users.update({
        _id: trainerId
      }, {
        $set: {
          clientLimit: 50,
          planType: "Monthly",
          datePurchased: today.toDateString(),
          expiresOn: today.toDateString()
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});