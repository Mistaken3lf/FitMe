Meteor.methods({
  contactUs: function (firstName, lastName, phoneNumber, email, message) {
    if(!Meteor.userId()) {
      throw new Meteor.error("Not Authorized");
    }
    
    //Allow other methods to execute without waiting
    //for the email to send.
    this.unblock();

    //Send the actual email to us
    Email.send({
      to: "info@divelop.io",
      from: email,
      subject: "Feedback",
      text: message
    });
  }
});