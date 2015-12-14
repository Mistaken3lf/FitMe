Meteor.methods({
  contactUs: function (firstName, lastName, phoneNumber, email, message) {
    if (Meteor.userId()) {
      //Send the actual email to us
      Email.send({
        to: "info@divelop.io",
        from: email,
        subject: "Feedback",
        text: message
      });
      
    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});