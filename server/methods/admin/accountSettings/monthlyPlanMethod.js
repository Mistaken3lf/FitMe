Meteor.methods({
  monthlyPlan(trainerId) {
    new SimpleSchema({
        trainerId: {
          type: String
        }
      }).validate({
        trainerId
      });
    
    if (Roles.userIsInRole(this.userId, "admin")) {
      let today = moment().format("MM/DD/YYYY");
      let expires = moment().add(1, "months").format("MM/DD/YYYY");
      
      //Find the trainer
      const curTrainer = Meteor.users.findOne({
        _id: trainerId
      });
      
      //If trainer already has more than 50 dont reset it
      if (curTrainer.clientLimit > 50) {
        //Update the trainers plan to one month,
        //set their plan type, date purchased, expires on date,
        //set status to active and has paid to true
        Meteor.users.update({
          _id: trainerId
        }, {
          $set: {
            planType: "One Month",
            datePurchased: today,
            expiresOn: expires,
            userStatus: "active",
            hasPaid: true,
          }
        });
        
        //Update the trainers clients to active as well
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
        //Trainer does not have more than 50 clients so setup the same monthly
        //plan and set them 
        Meteor.users.update({
          _id: trainerId
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
        
        //Update the clients status to active as well
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
