Meteor.methods({
  paymentDueSoon(expiresOn, trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let trainer = Meteor.users.findOne({_id: trainerId})
      let emailAddr = trainer.emails[0].address;

      this.unblock();
      
      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "info@divelop.io",
        subject: "FitMe -- Payment Due",
        text: "Your account will be expiring on " + expiresOn + " please provide payment to prevent your account from being suspended"
      });

    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
