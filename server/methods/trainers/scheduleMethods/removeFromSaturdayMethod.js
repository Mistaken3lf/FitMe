Meteor.methods({
  resetSaturdaysSchedule(saturdaysItem) {
    new SimpleSchema({
      saturdaysItem: {
        type: String
      }
    }).validate({
      saturdaysItem
    });

    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      const trainersClient = Meteor.users.findOne({
        _id: saturdaysItem
      });

      const trainersEmail = thisTrainer.emails[0].address;
      const clientsEmail = trainersClient.emails[0].address;

      if (thisTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, your account has been suspended");
      }

      Meteor.users.update({
        _id: saturdaysItem
      }, {
        $set: {
          saturdaysScheduleStart: "",
          saturdaysScheduleEnd: "",
          saturdayDescription: "",
          saturdayStatus: false
        }
      });

      this.unblock();

      //Send the actual email to us
      Email.send({
        to: clientsEmail,
        from: trainersEmail,
        subject: "FitMe -- Appointment Cancellation",
        text: "Hello " + trainersClient.firstName + " " + trainersClient.lastName + ',\n\n' + "We wanted to inform you that, your trainer, " + thisTrainer.firstName + " " + thisTrainer.lastName + " has cancelled their appointment for saturday"
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
