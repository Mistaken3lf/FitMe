Meteor.methods({
  sendInactiveEmail(trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      var trainer = Meteor.users.findOne({_id: trainerId})
      var emailAddr = trainer.emails[0].address;
      
      let fitmeTeam = "The FitMe Team".bold();

      this.unblock();

      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "info@divelop.io",
        subject: "FitMe -- Inactive Account",
        text: "Hello " + trainer.firstName + " " + trainer.lastName + ",\n\n" + "We have noticed that you have not logged into your account recently. Feel free to log back in... we are waiting for you. If your account continues to be inactive for much longer, it may be suspended or deleted.\n\n" + "Keep Training Hard\n\n" + fitmeTeam
      });

    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
