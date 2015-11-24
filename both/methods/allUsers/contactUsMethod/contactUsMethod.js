Meteor.methods({
  contactUs: function (firstName, lastName, phoneNumber, email, message) {
    if(!Meteor.userId()) {
      throw new Meteor.error("Not Authorized");
    }

    //Send the actual email to us
    Email.send({
      to: "mistaken3lf@gmail.com",
      from: email,
      subject: "Feedback",
      text: message
    });
  }
});