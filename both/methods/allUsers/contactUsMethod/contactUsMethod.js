Meteor.methods({
  contactUs: function(firstName, lastName, phoneNumber, email, message) {
    //Allow other methods to execute without waiting
    //for the email to send.
    this.unblock();

    //Send the actual email to us
    Email.send({
      to: "mistaken3lf@gmail.com",
      from: email,
      subject: "Feedback",
      text: message
    });
  }
});
