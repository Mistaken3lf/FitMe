const CancelSundaysAppointment = new ValidatedMethod({
  name: "cancelSundaysAppointment",

  //Validate the clients id
  validate: new SimpleSchema({
    clientId: {
      type: String
    }
  }).validator(),

  run({
    clientId
  }) {
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Find the current trainer
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //Find the trainers client
      const trainersClient = Meteor.users.findOne({
        _id: clientId
      });

      //Get the clients and trainers email
      const clientEmail = trainersClient.emails[0].address;
      const trainersEmail = thisTrainer.emails[0].address;

      //Make sure the trainer is not suspended
      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      //Make sure the trainer owns the client
      if (trainersClient.createdBy == this.userId) {
        //Reset sundays schedule
        Meteor.users.update({
          _id: clientId
        }, {
          $set: {
            sundaysScheduleStart: "",
            sundaysScheduleEnd: "",
            sundayDescription: "",
            sundayStatus: false
          }
        });

        this.unblock();

        //Send the actual email to us
        Email.send({
          to: clientEmail,
          from: trainersEmail,
          subject: "FitMe -- Appointment Cancellation",
          text: "Hello " + trainersClient.firstName + " " + trainersClient.lastName + ',\n\n' + "I will unfortunately have to cancel our scheduled appointment for Sunday.  I will get in touch with you so we can reschedule your appointment.\n\n\n" + "Thank you for understanding,\n\n\n" + thisTrainer.firstName + " " + thisTrainer.lastName
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
