const sixMonthPlan = new ValidatedMethod({
  name: "sixMonthPlan",

  validate: new SimpleSchema({
    trainerId: {
      type: String
    }
  }).validator(),

  run({
    trainerId
  }) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Get todays date
      let today = moment().format("MM/DD/YYYY");

      //Set expiration to six months from now
      let expires = moment().add(6, "months").format("MM/DD/YYYY");

      //Find the current trainer
      const curTrainer = Meteor.users.findOne({
        _id: trainerId
      });

      //Check if the current trainer already has more than
      //50 clients limit
      if (curTrainer.clientLimit > 50) {
        Meteor.users.update({
          _id: trainerId
        }, {
          $set: {
            planType: "Six Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active",
            hasPaid: true
          }
        });

        //Update the trainers clients as well
        Meteor.users.update({
          createdBy: trainerId,
          previouslySuspended: false
        }, {
          $set: {
            userStatus: "active"
          }
        }, {
          multi: true
        });

      } else {
        //Trainer does not have more than 50 so set their limit
        //and rest of their plan details
        Meteor.users.update({
          _id: trainerId
        }, {
          $set: {
            clientLimit: 50,
            planType: "Six Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active",
            hasPaid: true
          }
        });

        //Update the trainers clients as well
        Meteor.users.update({
          createdBy: trainerId,
          previouslySuspended: false
        }, {
          $set: {
            userStatus: "active"
          }
        }, {
          multi: true
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
