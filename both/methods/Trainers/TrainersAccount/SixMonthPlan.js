const sixMonthPlanTrainer = new ValidatedMethod({
  name: "sixMonthPlanTrainer",

  validate: null,

  run() {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Get todays date
      let today = moment().format("MM/DD/YYYY");

      //Set expiration to 6 months from today
      let expires = moment().add(6, "months").format("MM/DD/YYYY");

      //Find the current trainer
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

      //Check if trainer already has more than 50 client limit
      if (curTrainer.clientLimit > 50) {
        //Update trainer to six month plan
        Meteor.users.update({
          _id: this.userId
        }, {
          $set: {
            planType: "Six Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active",
            hasPaid: true
          }
        });

        //Update their clients status to active
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

      } else {
        //Set trainers plan to standard six month plan with 50 client limit
        Meteor.users.update({
          _id: this.userId
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

        //Set their clients status to active
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
