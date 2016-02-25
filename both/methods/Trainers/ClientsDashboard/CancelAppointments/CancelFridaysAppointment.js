const CancelFridaysAppointment = new ValidatedMethod({
  name: "cancelFridaysAppointment",

  validate: new SimpleSchema({
    clientId: {
      type: String
    }
  }).validator(),

  run({
    clientId
  }) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersClient = Meteor.users.findOne({
        _id: clientId
      });

      //Get the trainers and clients email
      const clientEmail = trainersClient.emails[0].address;
      const trainersEmail = thisTrainer.emails[0].address;

      //Check if the trainer is already suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      //Make sure the trainer owns this client
      if (trainersClient.createdBy == this.userId) {
        //Reset the fridays schedule
        Meteor.users.update({
          _id: clientId
        }, {
          $set: {
            fridaysScheduleStart: "",
            fridaysScheduleEnd: "",
            fridayDescription: "",
            fridayStatus: false
          }
        });

        this.unblock();

        //Send the actual email to us
        Email.send({
          to: clientEmail,
          from: trainersEmail,
          subject: "FitMe -- Appointment Cancellation",
          text: "Hello " + trainersClient.firstName + " " + trainersClient.lastName + ',\n\n' + "I will unfortunately have to cancel our scheduled appointment for Friday.  I will get in touch with you so we can reschedule your appointment.\n\n\n" + "Thank you for understanding,\n\n\n" + thisTrainer.firstName + " " + thisTrainer.lastName
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
