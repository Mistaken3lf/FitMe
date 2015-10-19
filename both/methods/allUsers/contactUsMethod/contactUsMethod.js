Meteor.methods({
  contactUs: function (contactUsData) {

    check(contactUsData, ContactUsSchema.contact)

    //Allow other methods to execute without waiting
    //for the email to send.
    this.unblock();

    //Send the actual email to us
    Email.send({
      to: "info@divelop.io",
      from: contactUsData.email,
      subject: "Feedback",
      text: contactUsData.message
    });
  }
});
