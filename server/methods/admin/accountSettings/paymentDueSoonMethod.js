Meteor.methods({
  paymentDueSoon(expiresOn, trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let trainer = Meteor.users.findOne({_id: trainerId})
      let emailAddr = trainer.emails[0].address;

      this.unblock();
      
      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "sales@gofitme.com",
        subject: "FitMe -- Renew Your Account",
        text: "Hello " + trainer.firstName + "," <br> "We wanted to inform you that your account will be expiring on " + expiresOn + ". Please provide payment to prevent your account from being suspended"
      });

    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
