Meteor.methods({
  oneMonthPlanTrainer(trainerId) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(1, "months").format("MM/DD/YYYY");

      let curTrainer = Meteor.users.findOne({
        _id: trainerId
      });

      if (curTrainer.clientLimit > 50) {
        Meteor.users.update({
          _id: trainerId
        }, {
          $set: {
            planType: "One Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active"
          }
        });
      } else {
        Meteor.users.update({
          _id: trainerId
        }, {
          $set: {
            clientLimit: 50,
            planType: "One Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active"
          }
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
