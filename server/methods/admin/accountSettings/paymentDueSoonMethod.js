Meteor.methods({
  paymentDueSoon(expiresOn, trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      let trainer = Meteor.users.findOne({_id: trainerId})
      let emailAddr = trainer.emails[0].address;
      
      let fitmeLink = "mkt.com/fitme".italics();
      let fitmeTeam = "The FitMe Team".bold();

      this.unblock();
      
      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "sales@gofitme.com",
        subject: "FitMe -- Renew Your Account",
        text: "Hello " + trainer.firstName + " " +  trainer.lastName + ',\n' + "We wanted to inform you that your account will be expiring on " + expiresOn + ". " + "Don't forget to renew your account by visiting " + fitmeLink + "." + " If you fail to renew, your account may be suspended until you renew it.\n\n" + "Keep training hard\n\n" + fitmeTeam 
      });

    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
