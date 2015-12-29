Meteor.methods({
  paymentDueSoon(expiresOn, trainerId) {
    new SimpleSchema({
        trainerId: {
          type: String
        },
        
        expiresOn: {
          type: String
        }
      }).validate({
        trainerId, expiresOn
      });
    
    if (Roles.userIsInRole(this.userId, "admin")) {
      const trainer = Meteor.users.findOne({
        _id: trainerId
      });
      
      //Get trainers email address
      let emailAddr = trainer.emails[0].address;
      
      //Account page link
      let fitmeLink = "www.gofitme.com/myAccount";
      
      //Bold the fitme team text
      let fitmeTeam = "The FitMe Team".bold();
      
      //Allow other methods to execute without blocking for email
      this.unblock();

      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "sales@gofitme.com",
        subject: "FitMe -- Account Renewal",
        text: "Hello " + trainer.firstName + " " + trainer.lastName + ',\n\n' + "We wanted to inform you that your account will be expiring on " + expiresOn + ". " + "To renew your account, visit the following link " + fitmeLink + "." + " If you fail to renew, your account may be briefly suspended until you renew it.\n\n\n" + "Keep Training Hard,\n\n" + fitmeTeam
      });
    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
