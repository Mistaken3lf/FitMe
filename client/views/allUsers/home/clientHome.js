<<<<<<< HEAD:client/views/allUsers/home/home.js
Template.home.onRendered(function () {
  //Add a counter to the contact text area.
  $('input#input_text, textarea#textarea1').characterCounter();

});

Template.trainerHome.onRendered(function(){
  //Initialization for the update slider
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

});

Template.home.events({
=======
Template.clientHome.events({
>>>>>>> devel:client/views/allUsers/home/clientHome.js
  'submit form': function (event) {
    event.preventDefault();
    //Get who send the message and the actual message
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var phoneNumber = $('[name=phoneNumber]').val();
    var email = $('[name=email]').val();
    var message = $('[name=message]').val();
    //Call the send feedback method to send us information.
    Meteor.call("contactUs", firstName, lastName, phoneNumber, email, message, function (error) {
      if (error) {
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        Bert.alert("Email successfully sent", 'success', 'growl-top-right');
        firstName = $('[name=firstName]').val('');
        lastName = $('[name=lastName]').val('');
        phoneNumber = $('[name=phoneNumber]').val('');
        email = $('[name=email]').val('');
        message = $('[name=message]').val('');
        FlowRouter.go("/");
      }
    });
  }
<<<<<<< HEAD:client/views/allUsers/home/home.js
});

Template.home.helpers({
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
})

var trainerHome = {

    // Various toast messages
    toastMessages: {
        fillInRequiredFields: 'Please fill in the required fields',
        enterValidEmail: 'Please enter a valid email address',
        messageSent: "Your message has been sent. We'll get back to you soon.",
        somethingWrong: 'Something went wrong, try again. Error: '
    },
};
=======
});
>>>>>>> devel:client/views/allUsers/home/clientHome.js
