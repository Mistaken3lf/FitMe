Meteor.methods({
  yearlyPlan(trainerId) {
    if (Roles.userIsInRole(this.userId, "admin") || Roles.userIsInRole(this.userId, "trainer")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(12, "months").format("MM/DD/YYYY");
      
      let curTrainer = Meteor.users.findOne({
        _id: trainerId
      });

      if (curTrainer.clientLimit > 50) {
        Meteor.users.update({
          _id: trainerId
        }, {
          $set: {
            planType: "One Year",
            datePurchased: today,
            expiresOn: expires
          }
        });
      } else {
        Meteor.users.update({
          _id: trainerId
        }, {
          $set: {
            clientLimit: 50,
            planType: "One Year",
            datePurchased: today,
            expiresOn: expires
          }
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});