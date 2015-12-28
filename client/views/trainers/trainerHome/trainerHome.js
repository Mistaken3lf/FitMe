Template.trainerHome.onRendered(() => {
  //Initialization for the update slider
  $('.slider').slider({
    full_width: true
  });

  //Initialize the parallax
  $('.parallax').parallax();
});

Template.trainerHome.events({
  //Contact us email
  'submit form'(event) {
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
        Bert.alert("Email successfully sent", 'success', 'growl-top-right');
        firstName = $('[name=firstName]').val('');
        lastName = $('[name=lastName]').val('');
        phoneNumber = $('[name=phoneNumber]').val('');
        email = $('[name=email]').val('');
        message = $('[name=message]').val('');

        //Go back to the trainer home
        FlowRouter.go("/trainerHome");
      }
    });
  }
});

Template.trainerHome.helpers({
  //Check if the user is logging in 
  isLoggingIn() {
    return Meteor.loggingIn();
  }
})