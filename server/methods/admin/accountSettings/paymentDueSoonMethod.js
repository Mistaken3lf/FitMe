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
      const emailAddr = trainer.emails[0].address;

      //Account page link
      const fitmeLink = "www.gofitme.com/myAccount";

      //Allow other methods to execute without blocking for email
      this.unblock();

      //Send the actual email to us
      Email.send({
        to: emailAddr,
        from: "sales@gofitme.com",
        subject: "FitMe -- Account Renewal",
        html: "<p>Hello " + trainer.firstName + " " + trainer.lastName + "<br><br>" + "We wanted to inform you that your account will be expiring on " + expiresOn + ". " + "To renew your account, visit the following link " + fitmeLink + "." + " If you fail to renew, your account may be briefly suspended until you renew it.<br><br><br>" + "Keep Training Hard,<br><br>" + "<strong>The FitMe Team</strong></p>"
      });
    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});
