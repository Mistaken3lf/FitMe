const oneMonthPlanTrainer = new ValidatedMethod({
  name: "oneMonthPlanTrainer",

  validate: null,

  run() {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(1, "months").format("MM/DD/YYYY");

      const curTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //Prevent client side console upgrading plans if they have not paid
      if (curTrainer.hasPaid == false) {
        throw new Meteor.Error("You must make a payment first");
      }

      //Check if the user has paid and is not in the free plan to prevent
      //browser console hacking
      if (curTrainer.hasPaid == true && curTrainer.planType != "Free" && curTrainer.userStatus != "suspended") {
        throw new Meteor.Error("Sorry, you are already in a plan");
      }

      //Check if the trainer has more than a 50 client limit already
      if (curTrainer.clientLimit > 50) {
        //Set their plan to one month
        Meteor.users.update({
          _id: this.userId
        }, {
          $set: {
            planType: "One Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active",
            hasPaid: true,
          }
        });

        //Set their clients to active
        Meteor.users.update({
          createdBy: this.userId
        }, {
          $set: {
            userStatus: "active"
          }
        }, {
          multi: true
        });
      } else {
        //They dont have more than 50 clients so update them with the 50
        //client limit and rest of the monthly plan details
        Meteor.users.update({
          _id: this.userId
        }, {
          $set: {
            clientLimit: 50,
            planType: "One Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active",
            hasPaid: true
          }
        });

        //Set their client user status to active
        Meteor.users.update({
          createdBy: this.userId,
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
