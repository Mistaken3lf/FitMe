Meteor.methods({
  contactUs(firstName, lastName, phoneNumber, email, message) {
    new SimpleSchema({
        firstName: {
          type: String
        },
        
        lastName: {
          type: String
        },
        
        phoneNumber: {
          type: String
        },
        
        email: {
          type: String
        },
        
        message: {
          type: String
        }
      }).validate({
        trainerId
      });
      
    this.unblock();
    
    if (Meteor.userId()) {
      //Send the actual email to us
      Email.send({
        to: "info@gofitme.com",
        from: email,
        subject: "Feedback",
        text: message
      });
      
    } else {
      throw new Meteor.error("Not Authorized");
    }
  }
});