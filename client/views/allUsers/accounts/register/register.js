Template.register.events({
  //Capture register form submit
  'submit form': function (event) {
    //Prevent default form submission
    event.preventDefault();

    //Get the first and last name, username, password and email from form
    var firstName = $('[name=firstName]').val();
    var lastName = $('[name=lastName]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();

    //Call server method to register the trainer
    Meteor.call("registerTrainer", firstName, lastName, username, password, email, function (error) {

      //Error registering trainer
      if (error) {
        //Pop up an alert to show the error
        Bert.alert(error.reason, 'danger', 'growl-top-right');
      } else {
        //Login user with provided credentials
        Meteor.loginWithPassword(username, password, function (error) {

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
