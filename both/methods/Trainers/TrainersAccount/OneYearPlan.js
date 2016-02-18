Meteor.methods({
  oneYearPlanTrainer() {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(12, "months").format("MM/DD/YYYY");

      const curTrainer = Meteor.users.findOne({
        _id: this.userId
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
      
      //Check if the trainer has more than 50 client limit already
      if (curTrainer.clientLimit > 50) {
        //Update trainer plan to one year
        Meteor.users.update({
          _id: this.userId
        }, {
          $set: {
            planType: "One Year",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active",
            hasPaid: true
          }
        });
        
        //Set their clients status to active since they bought a plan
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
        //Update the trainers plan to one year and a standard 50 client limit
        Meteor.users.update({
          _id: this.userId
        }, {
          $set: {
            clientLimit: 50,
            planType: "One Year",
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