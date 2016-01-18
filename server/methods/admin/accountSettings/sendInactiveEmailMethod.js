Meteor.methods({
  sendInactiveEmail(trainerId) {
    new SimpleSchema({
        trainerId: {
          type: String
        }
      }).validate({
        trainerId
      });

    if (Roles.userIsInRole(this.userId, "admin")) {
      const trainer = Meteor.users.findOne({
        _id: trainerId
      });

      //Get trainers email
      const emailAddr = trainer.emails[0].address;

      //Allow other methods to execute without blocking
      this.unblock();

      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "support@gofitme.com",
        subject: "FitMe -- Inactive Account",
        html: "<p>Hello " + trainer.firstName + " " + trainer.lastName + "<br><br>" + "We have noticed that you have not logged into your account recently.  Feel free to log back in... we are waiting for you. If your account continues to be inactive for much longer, it may be suspended or deleted.<br><br><br>" + "Keep Training Hard,<br><br>" + "<strong>The FitMe Team</strong>"
      });

    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
