Template.register.events({
  //Capture register form submit
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

    //Call server method to register the trainer
    Meteor.call("registerTrainer", newTrainerData, function (error) {

      //Error registering trainer
      if (error) {
        //Pop up an alert to show the error
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        //Login user with provided credentials
        Meteor.loginWithPassword(newTrainerData.username, newTrainerData.password, function (error) {

          //Failed to login
          if (error) {
            //Pop up an alert to show the reason for failed login
            Bert.alert(error.reason, 'danger', 'growl-top-right');
          } else {
            //Route the newly logged in user home
            FlowRouter.go('/');
          }
        });
      }
    });
  }
});
