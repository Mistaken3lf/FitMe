Meteor.methods({
  sendFeedbackEmail: function(fromWho, message) {
    //Allow other methods to execute without waiting
    //for the email to send.
    this.unblock();

    //Send the actual email to us
    Email.send({
      to: "Mistaken3lf@gmail.com",
      from: fromWho,
      subject: "Feedback",
      text: message
    });
  }
});
