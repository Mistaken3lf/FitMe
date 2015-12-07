Meteor.methods({
  monthlyPlan: function (trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(1, "months").format("MM/DD/YYYY");

      Meteor.users.update({
        _id: trainerId
      }, {
        $set: {
          clientLimit: 50,
          planType: "Monthly",
          datePurchased: today,
          expiresOn: expires
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
