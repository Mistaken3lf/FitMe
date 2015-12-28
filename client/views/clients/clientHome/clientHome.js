Template.clientHome.onRendered(() => {
  //Initialization for the parallax images
  $('.parallax').parallax();
});

Template.clientHome.events({
  'submit form' (event) {
    event.preventDefault();
    //Get who send the message and the actual message
    let firstName = $('[name=firstName]').val();
    let lastName = $('[name=lastName]').val();
    let phoneNumber = $('[name=phoneNumber]').val();
    let email = $('[name=email]').val();
    let message = $('[name=message]').val();
    //Call the send feedback method to send us information.
    Meteor.call("contactUs", firstName, lastName, phoneNumber, email, message, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        //Show success message to let them know the email sent
        Bert.alert("Email successfully sent", 'success', 'growl-top-right');

        //Reset the form values to blank
        firstName = $('[name=firstName]').val('');
        lastName = $('[name=lastName]').val('');
        phoneNumber = $('[name=phoneNumber]').val('');
        email = $('[name=email]').val('');
        message = $('[name=message]').val('');
        
        //Go back to client home
        FlowRouter.go("/clientHome");
      }
    });
  }
});

Template.clientHome.helpers({
  //Check if the user is logging in 
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});
