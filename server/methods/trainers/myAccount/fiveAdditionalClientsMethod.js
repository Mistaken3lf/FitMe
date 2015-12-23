Meteor.methods({
  fiveAdditionalClientsTrainer(trainerId) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let curTrainer = Meteor.users.findOne({
        _id: trainerId
      });

      //Prevent client side console upgrading plans if they have not paid
      if (curTrainer.hasPaid == false) {
        throw new Meteor.Error("You must make a payment first");
      }
      
      //Check if the user is suspended before letting them update their client limit
      if(curTrainer.userStatus == "suspended") {
        throw new Meteor.Error("You must activate your account first");
      }

      Meteor.users.update({
        _id: trainerId
      }, {
        $inc: {
          clientLimit: 5,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
