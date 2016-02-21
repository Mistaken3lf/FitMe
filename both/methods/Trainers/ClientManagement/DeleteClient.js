const deleteClient = new ValidatedMethod({
  name: "deleteClient",

  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account is suspended");
      }

      const thisClient = Meteor.users.findOne({
        _id: id
      });


      //Make sure client is actually owned by the trainer
      if (thisClient.createdBy == this.userId) {
        //Remove cardio of the client being deleted
        ClientCardio.remove({
          whosCardio: id
        });

        //Remove stats of the client being deleted
        ClientStats.remove({
          whosStats: id
        });

        //Remove workout of client being deleted
        ClientWorkout.remove({
          whosWorkout: id
        });

        //Delete the client clicked on
        Meteor.users.remove(id);
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});

