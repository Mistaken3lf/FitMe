Meteor.methods({
  sendInactiveEmail: function (trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      var trainer = Meteor.users.findOne({_id: trainerId})
      var emailAddr = trainer.emails[0].address;
      
      this.unblock();
      
      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "info@divelop.io",
        subject: "Inactive Account",
        text: "Your account has been inactive for a while, this is a warning that your account will be deleted soon"
      });
      
    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});