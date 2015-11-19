Template.addTrainerAdmin.events({
  //Capture create trainer form event
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Get the first and last name, username, password and email from form
    var newTrainerData = {
      //Get who send the message and the actual message
      firstName: $('[name=firstName]').val(),
      lastName: $('[name=lastName]').val(),
      username: $('[name=username]').val(),
      password: $('[name=password]').val(),
      email: $('[name=email]').val(),
    };

    //Call server method to create the trainer
    Meteor.call("createTrainer", newTrainerData, function (error) {

      //Error creating trainer
      if (error) {
        //Pop up an alert to show the error
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        //Route back to the command center
        FlowRouter.go('/commandCenter');
      }
    });
  }
});

Template.addTrainerAdmin.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
});
