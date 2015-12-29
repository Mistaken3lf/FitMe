Meteor.methods({
  sixMonthPlanTrainer(trainerId) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(6, "months").format("MM/DD/YYYY");

      const curTrainer = Meteor.users.findOne({
        _id: trainerId
      });
      
      //Prevent client side console upgrading plans if they have not paid
      if(curTrainer.hasPaid == false) {
        throw new Meteor.Error("You must make a payment first");
      }
      
      //Check if the user has paid and is not in the free plan to prevent 
      //browser console hacking
      if(curTrainer.hasPaid == true && curTrainer.planType != "Free" && curTrainer.userStatus != "suspended") {
        throw new Meteor.Error("Sorry, you are already in a plan");
      }

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

        Meteor.users.update({
          createdBy: trainerId
        }, {
          $set: {
            userStatus: "active"
          }
        }, {
          multi: true
        });

      } else {
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

        Meteor.users.update({
          createdBy: trainerId
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