const twentyAdditionalClientsTrainer = new ValidatedMethod({
  name: "twentyAdditionalClientsTrainer",

  validate: null,

  run() {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Find the current trainer
      const curTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //Prevent client side console upgrading plans if they have not paid
      if (curTrainer.hasPaid == false) {
        throw new Meteor.Error("You must make a payment first");
      }

      //Check if the user is suspended before letting them update their client limit
      if (curTrainer.userStatus == "suspended") {
        throw new Meteor.Error("You must activate your account first");
      }

      //Add 20 clients to the trainers client limit
      Meteor.users.update({
        _id: this.userId
      }, {
        $inc: {
          clientLimit: 20,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
