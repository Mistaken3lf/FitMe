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
      let emailAddr = trainer.emails[0].address;
      
      //Bold the fitme team text
      let fitmeTeam = "The FitMe Team".bold();
      
      //Allow other methods to execute without blocking
      this.unblock();

      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "support@gofitme.com",
        subject: "FitMe -- Inactive Account",
        text: "Hello " + trainer.firstName + " " + trainer.lastName + ",\n\n" + "We have noticed that you have not logged into your account recently.  Feel free to log back in... we are waiting for you. If your account continues to be inactive for much longer, it may be suspended or deleted.\n\n\n" + "Keep Training Hard,\n\n" + fitmeTeam
      });

    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
